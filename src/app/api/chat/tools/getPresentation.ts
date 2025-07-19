import { tool } from 'ai';
import { z } from 'zod';

export const getPresentation = tool({
  description:
    'This tool returns a concise personal introduction of Anugra Gupta. It is used to answer the question "Who are you?" or "Tell me about yourself"',
  parameters: z.object({}),
  execute: async () => {
    return {
      presentation:
        "I'm Anugra Gupta, a Productized AI Efficiency Engine. I live by Naval Ravikant's 'Productize Yourself' philosophy—turning full-stack development, AI agentic systems, marketing, sales, data analysis, public speaking, and sustainability expertise into scalable workflows that save time and multiply impact.",
    };
  },
});
