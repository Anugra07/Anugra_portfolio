import Image from 'next/image';
import { Image as Img } from 'lucide-react';
import { ChevronRight, Link } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { url } from 'inspector';

// Enhanced project content array with all projects
const PROJECT_CONTENT = [
  {
    title: 'AI Agentic Workflow Engine',
    description:
      'An AI-driven orchestration system that delegates, automates, and measures complex workflows in real time. This project embodies the "Productize Yourself" philosophy by turning manual processes into scalable, automated systems that work 24/7.',
    techStack: [
      'Node.js',
      'TypeScript',
      'Google Gemini API',
      'Redis',
      'Workflow Orchestration',
      'AI Agents'
    ],
    date: '2024',
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/Anugra07/agentic-workflow',
      },
    ],
    images: [
      {
        src: '/syntopreview.png',
        alt: 'AI Agentic Workflow Engine',
      }
    ],
  },
  {
    title: 'Cold-Email AI Platform',
    description:
      'End-to-end cold outreach system with LinkedIn scraping, GPT-powered email generation, and multi-provider delivery. This platform demonstrates how AI can transform traditional sales processes with measurable ROI.',
    techStack: [
      'Express.js',
      'TypeScript',
      'OpenAI',
      'PostgreSQL',
      'LinkedIn API',
      'Email Automation'
    ],
    date: '2024',
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/Anugra07/cold-email',
      },
    ],
    images: [
      {
        src: '/ratepreview.png',
        alt: 'Cold-Email AI Platform',
      }
    ],
  },
  {
    title: 'WanderWise Travel AI',
    description:
      'AI-driven trip planner that analyzes preferences and optimizes itineraries in minutes. This project showcases how AI can dramatically reduce planning time while improving user experience.',
    techStack: [
      'React',
      'Node.js',
      'Python',
      'Prisma ORM',
      'AI Planning',
      'Travel APIs'
    ],
    date: '2024',
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/Anugra07/capstone-sem2',
      },
    ],
    images: [
      {
        src: '/defaipreview.png',
        alt: 'WanderWise Travel AI',
      }
    ],
  },
  {
    title: 'WolfPack Startup Ecosystem',
    description:
      'Platform visualizing and connecting startup stakeholders with interactive 3D network graphs. This project demonstrates how data visualization can streamline collaboration and decision-making.',
    techStack: [
      'Three.js',
      'Next.js',
      'Tailwind CSS',
      '3D Visualization',
      'Network Graphs'
    ],
    date: '2024',
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/Anugra07/wolfPack',
      },
    ],
    images: [
      {
        src: '/fitgearpreview.png',
        alt: 'WolfPack Startup Ecosystem',
      }
    ],
  },
  {
    title: 'LeetCode DSA Guidance Extension',
    description:
      'A Chrome extension that provides advanced DSA (Data Structures & Algorithms) guidance and productivity tools for LeetCode users. Helps users stay consistent with daily DSA practice and offers smart reminders and analytics.',
    techStack: [
      'JavaScript',
      'Chrome Extension APIs',
      'TypeScript',
      'Webpack'
    ],
    date: '2024',
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/Anugra07/Extension',
      },
    ],
    images: [
      {
        src: '/extensionpreview.png',
        alt: 'LeetCode DSA Guidance Extension',
      }
    ],
  },
];

// Define interface for project prop
interface ProjectProps {
  title: string;
  description?: string;
  techStack?: string[];
  date?: string;
  links?: { name: string; url: string }[];
  images?: { src: string; alt: string }[];
}

const ProjectContent = ({ project }: { project: ProjectProps }) => {
  // Find the matching project data
  const projectData = PROJECT_CONTENT.find((p) => p.title === project.title);

  if (!projectData) {
    return <div>Project details not available</div>;
  }

  return (
    <div className="space-y-10">
      {/* Header section with description */}
      <div className="rounded-3xl bg-[#F5F5F7] p-8 dark:bg-[#1D1D1F]">
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
            <span>{projectData.date}</span>
          </div>

          <p className="text-secondary-foreground font-sans text-base leading-relaxed md:text-lg">
            {projectData.description}
          </p>

          {/* Tech stack */}
          <div className="pt-4">
            <h3 className="mb-3 text-sm tracking-wide text-neutral-500 uppercase dark:text-neutral-400">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {projectData.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="rounded-full bg-neutral-200 px-3 py-1 text-sm text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Links section */}
      {projectData.links && projectData.links.length > 0 && (
        <div className="mb-24">
          <div className="px-6 mb-4 flex items-center gap-2">
            <h3 className="text-sm tracking-wide text-neutral-500 dark:text-neutral-400">
              Links
            </h3>
            <Link className="text-muted-foreground w-4" />
          </div>
          <Separator className="my-4" />
          <div className="space-y-3">
            {projectData.links.map((link, index) => (
                <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#F5F5F7] flex items-center justify-between rounded-xl p-4 transition-colors hover:bg-[#E5E5E7] dark:bg-neutral-800 dark:hover:bg-neutral-700"
                >
                <span className="font-light capitalize">{link.name}</span>
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
            ))}
          </div>
        </div>
      )}

      {/* Images gallery */}
      {projectData.images && projectData.images.length > 0 && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-4">
            {projectData.images.map((image, index) => (
              <div
                key={index}
                className="relative aspect-video overflow-hidden rounded-2xl"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// Main data export with updated content
export const data = [
  {
    category: 'AI Workflow Automation',
    title: 'AI Agentic Workflow Engine',
    src: '/syntopreview.png',
    content: <ProjectContent project={{ title: 'AI Agentic Workflow Engine' }} />,
  },
  {
    category: 'Sales Automation',
    title: 'Cold-Email AI Platform',
    src: '/ratepreview.png',
    content: <ProjectContent project={{ title: 'Cold-Email AI Platform' }} />,
  },
  {
    category: 'Travel Tech',
    title: 'WanderWise Travel AI',
    src: '/defaipreview.png',
    content: <ProjectContent project={{ title: 'WanderWise Travel AI' }} />,
  },
  {
    category: 'Startup Ecosystem',
    title: 'WolfPack Startup Ecosystem',
    src: '/fitgearpreview.png',
    content: <ProjectContent project={{ title: 'WolfPack Startup Ecosystem' }} />,
  },
];
