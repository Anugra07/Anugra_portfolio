
import { tool } from "ai";
import { z } from "zod";


export const getSports = tool({
  description:
    "This tool will show some photos of Anugra Gupta doing activities or working on projects",
  parameters: z.object({}),
  execute: async () => {
    return "Here are some of my best pictures working on projects and building AI systems!";
  },
});