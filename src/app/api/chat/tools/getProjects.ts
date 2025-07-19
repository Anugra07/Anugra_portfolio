
import { tool } from "ai";
import { z } from "zod";


export const getProjects = tool({
  description:
    "This tool will show a list of all projects made by Anugra Gupta",
  parameters: z.object({}),
  execute: async () => {
    return "Here are all the projects I've built (above)! Don't hesitate to ask me more about them! My key projects include the AI Agentic Workflow Engine, Cold-Email AI Platform, WanderWise Travel AI, and WolfPack Startup Ecosystem.";
  },
});