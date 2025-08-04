import { createTool } from '@mastra/core';
import { z } from 'zod';

export const educationTool = createTool({
  id: 'education-tool',
  description: 'Teach, explain, summarize, and quiz on any topic for any age or experience level.',
  inputSchema: z.object({
    topic: z.string().describe('The topic or question to teach about, e.g., "cell division" or "quantum physics"'),
    audience: z.string().optional().describe('Learner profile: age, background, level, e.g., "7-year-old", "beginner adult", "high school student"'),
    format: z.enum(['explanation', 'lesson', 'summary']).default('explanation')
      .describe('Teaching format: explanation, lesson, or summary'),
    goals: z.string().optional().describe('Specific learning goals (optional)'),
    language: z.string().optional().describe('Preferred language for the teaching output (optional)'),
  }),
  outputSchema: z.object({
    response: z.string().describe('A clear, accurate, audience-tailored teaching response'),
    followUpSuggestions: z.array(z.string()).optional().describe('Suggested next questions or learning steps'),
  }),
  execute: ({ topic, audience, format, goals, language }) => {
    const suggestions = [
      `Would you like a quiz about ${topic}?`,
      `Need deeper examples on ${topic}?`,
      `Shall I summarize this topic for you?`
    ];

    return {
      response: `Teaching about ${topic} for ${audience} as a ${format} in ${language || 'English'}`,
      followUpSuggestions: suggestions,
    };
  },
});