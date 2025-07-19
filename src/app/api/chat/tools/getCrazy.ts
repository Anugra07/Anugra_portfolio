
import { tool } from "ai";
import { z } from "zod";


export const getCrazy = tool({
  description:
    "This tool will tell the craziest thing Anugra Gupta has ever done. use it when the user ask something like : 'What the craziest thing you've ever done?'",
  parameters: z.object({}),
  execute: async () => {
    return "One of the most challenging things I've done is building an AI Agentic Workflow Engine that automates 80% of repetitive tasks, saving users ~30 hours per week. The complexity of orchestrating multiple AI agents, handling real-time metrics, and ensuring system reliability was intense but incredibly rewarding!";
  },
});