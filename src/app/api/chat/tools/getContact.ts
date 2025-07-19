import { tool } from 'ai';
import { z } from 'zod';

export const getContact = tool({
  description:
    'This tool shows Anugra Gupta\'s contact information.',
  parameters: z.object({}),
  execute: async () => {
    return "Here are my contact details:\n\n📧 Email: anugragupta07@gmail.com\n🌐 Website: https://productized-ai-portfolio.vercel.app\n💼 GitHub: github.com/Anugra07\n📍 Location: Delhi, IST\n\nFeel free to reach out for collaboration opportunities, AI efficiency consulting, or just to discuss workflow automation and sustainable tech! 😉";
  },
});
