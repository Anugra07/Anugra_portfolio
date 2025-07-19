'use client';

import { Message } from 'ai/react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

export type ChatMessageContentProps = {
  message: Message;
  isLast?: boolean;
  isLoading?: boolean;
  reload?: () => Promise<string | null | undefined>;
  addToolResult?: (args: { toolCallId: string; result: string }) => void;
  skipToolRendering?: boolean;
};

const CodeBlock = ({ content }: { content: string }) => {
  const [isOpen, setIsOpen] = useState(true);

  // Extract language if present in the first line
  const firstLineBreak = content.indexOf('\n');
  const firstLine = content.substring(0, firstLineBreak).trim();
  const language = firstLine || 'text';
  const code = firstLine ? content.substring(firstLineBreak + 1) : content;

  // Get first few lines for preview
  const previewLines = code.split('\n').slice(0, 1).join('\n');
  const hasMoreLines = code.split('\n').length > 1;

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="my-4 w-full overflow-hidden rounded-md"
    >
      <div className="bg-secondary text-secondary-foreground flex items-center justify-between rounded-t-md border-b px-4 py-1">
        <span className="text-xs">
          {language !== 'text' ? language : 'Code'}
        </span>
        <CollapsibleTrigger className="hover:bg-secondary/80 rounded p-1">
          {isOpen ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </CollapsibleTrigger>
      </div>

      <div className="bg-accent/80 text-accent-foreground rounded-b-md">
        {!isOpen && hasMoreLines ? (
          <pre className="px-4 py-3">
            <code className="text-sm">{previewLines + '\n...'}</code>
          </pre>
        ) : (
          <CollapsibleContent>
            <div className="custom-scrollbar" style={{ overflowX: 'auto' }}>
              <pre className="min-w-max px-4 py-3">
                <code className="text-sm whitespace-pre">{code}</code>
              </pre>
            </div>
          </CollapsibleContent>
        )}
      </div>
    </Collapsible>
  );
};

function ProjectCards({ projects }: { projects: any[] }) {
  return (
    <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch my-8">
      {projects.map((project, idx) => (
        <div
          key={project.title}
          className="flex-1 min-w-[260px] max-w-xs rounded-3xl bg-gradient-to-b from-black via-neutral-900 to-neutral-800 p-6 shadow-lg flex flex-col justify-between items-start relative overflow-hidden"
        >
          <div className="mb-4">
            <div className="text-white text-sm font-medium mb-2 opacity-80">
              {project.category}
            </div>
            <div className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">
              {project.title}
            </div>
            <div className="text-white/90 text-base mb-4">
              {project.description}
            </div>
          </div>
          {project.image && (
            <div className="w-full flex justify-center mb-4">
              <Image
                src={project.image}
                alt={project.title}
                width={120}
                height={120}
                className="rounded-xl object-contain"
              />
            </div>
          )}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto inline-block rounded-full bg-white px-4 py-2 text-sm font-semibold text-black shadow hover:bg-neutral-200 transition"
          >
            View on GitHub
          </a>
        </div>
      ))}
    </div>
  );
}

export default function ChatMessageContent({
  message,
}: ChatMessageContentProps) {
  // Only handle text parts
  const renderContent = () => {
    return message.parts?.map((part, partIndex) => {
      if (part.type !== 'text' || !part.text) return null;

      // Custom: Detect [PROJECT_CARDS]...[/PROJECT_CARDS] and render as cards
      const projectCardsMatch = part.text.match(/\[PROJECT_CARDS\]([\s\S]*?)\[\/PROJECT_CARDS\]/);
      if (projectCardsMatch) {
        try {
          const json = JSON.parse(projectCardsMatch[1]);
          if (json.projects && Array.isArray(json.projects)) {
            return <ProjectCards projects={json.projects} key={`project-cards-${partIndex}`} />;
          }
        } catch (e) {
          // fallback to normal rendering if JSON parse fails
        }
      }

      // Split content by code block markers
      const contentParts = part.text.split('```');

      return (
        <div key={partIndex} className="w-full space-y-4">
          {contentParts.map((content, i) =>
            i % 2 === 0 ? (
              // Regular text content
              <div key={`text-${i}`} className="prose dark:prose-invert w-full">
                <Markdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    p: ({ children }) => (
                      <p className="break-words whitespace-pre-wrap">
                        {children}
                      </p>
                    ),
                    ul: ({ children }) => (
                      <ul className="my-4 list-disc pl-6">{children}</ul>
                    ),
                    ol: ({ children }) => (
                      <ol className="my-4 list-decimal pl-6">{children}</ol>
                    ),
                    li: ({ children }) => <li className="my-1">{children}</li>,
                    a: ({ href, children }) => (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                      >
                        {children}
                      </a>
                    ),
                  }}
                >
                  {content}
                </Markdown>
              </div>
            ) : (
              // Code block content
              <CodeBlock key={`code-${i}`} content={content} />
            )
          )}
        </div>
      );
    });
  };

  return <div className="w-full">{renderContent()}</div>;
}
