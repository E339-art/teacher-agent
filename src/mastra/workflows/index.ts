import { createWorkflow } from '@mastra/core/workflow';
import { educationTool } from '../tools';

/**
 * Teach Workflow: Provides a comprehensive and adaptive teaching session.
 * It gathers necessary learner details, delivers a tailored lesson/explanation,
 * and offers follow-up actions such as quizzes or further exploration.
 */
export const teachWorkflow = createWorkflow({
  id: 'teach-workflow',
  description: 'A universal teaching workflow that customizes lessons, explanations, and quizzes for any topic and audience.',
  steps: [
    {
      id: 'clarify-audience',
      description: 'Ensure the learner’s profile is clarified for better personalization.',
      handler: async (input, context) => {
        if (!input.audience) {
          return {
            prompt: 'Could you tell me about the intended audience or your background? For example, age, experience level, or learning goals.',
            needed: 'audience',
          };
        }
        return { next: true };
      },
    },
    {
      id: 'clarify-topic',
      description: 'Ensure that the subject matter is defined.',
      handler: async (input, context) => {
        if (!input.topic) {
          return {
            prompt: 'What specific topic would you like to learn about?',
            needed: 'topic',
          };
        }
        return { next: true };
      },
    },
    {
      id: 'clarify-format',
      description: 'Confirm the preferred learning format (e.g., explanation, lesson, quiz, summary).',
      handler: async (input, context) => {
        if (!input.format) {
          return {
            prompt: 'Which format would you prefer? (Choose from: "explanation", "lesson", "quiz", "summary")',
            needed: 'format',
          };
        }
        return { next: true };
      },
    },
    {
      id: 'teach',
      description: 'Deliver a tailored teaching lesson using the education tool.',
      handler: async (input, context) => {
        try {
          const { topic, audience, format = 'lesson', goals, language } = input;
          const result = await educationTool.execute({
            topic,
            audience,
            format,
            goals,
            language,
          });
          // Return the teaching message and follow-up suggestions.
          return {
            message: result.response,
            followUp: result.followUpSuggestions ?? [],
          };
        } catch (error) {
          return {
            message: 'I encountered an error while preparing the lesson. Please try again later or adjust your request.',
          };
        }
      },
    },
    {
      id: 'follow-up',
      description: 'Offer follow-up actions to further engage and deepen understanding.',
      handler: async (input, context) => {
        const followUpOptions = [
          'Take a Quiz',
          'Request More Examples',
          'Explore Related Topics',
          'Finish Session',
        ];
        return {
          prompt: 'Would you like to proceed with one of the follow-up actions?',
          options: followUpOptions,
        };
      },
    },
  ],
});

export default [teachWorkflow];