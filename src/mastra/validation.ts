import { z } from 'zod';

export const teachInputSchema = z.object({
  topic: z.string().describe('The topic to teach about'),
  audience: z.string().optional().describe('The target audience'),
  format: z.enum(['explanation', 'lesson', 'quiz', 'summary']).optional().describe('Teaching format'),
  goals: z.string().optional().describe('Learning goals'),
  difficulty: z.enum(['beginner', 'intermediate', 'advanced']).optional().describe('Difficulty level'),
});

export const quickAnswerInputSchema = z.object({
  question: z.string().describe('The question to answer'),
});

export const learningPathInputSchema = z.object({
  topic: z.string().describe('The topic to create a learning path for'),
  level: z.enum(['beginner', 'intermediate', 'advanced']).describe('The learner\'s level'),
});

export const teachOutputSchema = z.object({
  message: z.string().describe('The educational response'),
  followUp: z.array(z.string()).describe('Follow-up suggestions'),
});

export const quickAnswerOutputSchema = z.object({
  message: z.string().describe('The answer'),
  followUp: z.array(z.string()).describe('Follow-up suggestions'),
});

export const learningPathOutputSchema = z.object({
  path: z.array(z.object({
    step: z.number(),
    title: z.string(),
    description: z.string(),
  })).describe('The learning path'),
});
