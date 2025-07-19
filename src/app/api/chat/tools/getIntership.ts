import { tool } from 'ai';
import { z } from 'zod';

export const getInternship = tool({
  description:
    "Gives a summary of what kind of opportunities Anugra Gupta is looking for, plus contact info and how to reach him. Use this tool when the user asks about collaboration opportunities or how to contact him for projects.",
  parameters: z.object({}),
  execute: async () => {
    return `Here's what I'm focused on 👇

- 📅 **Current Focus**: AI Efficiency Consulting & Automation Projects
- 🌍 **Location**: Delhi, IST (Remote collaboration welcome)
- 🧑‍💻 **Specialization**: AI agentic systems, workflow automation, marketing/sales automation
- 🛠️ **Stack**: Node.js, TypeScript, Python, OpenAI, Google Gemini, React, PostgreSQL
- ✅ **What I bring**: Proven track record of automating 80% of repetitive tasks, 3× reply rate improvements, and measurable ROI within 30 days
- 🔥 I build systems that work 24/7 and scale impact exponentially

📬 **Contact me** via:
- Email: anugragupta07@gmail.com
- Website: https://productized-ai-portfolio.vercel.app
- GitHub: [github.com/Anugra07](https://github.com/Anugra07)

Let's build efficient, scalable systems together! 🚀
    `;
  },
});
