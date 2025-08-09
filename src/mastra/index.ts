import { Mastra } from '@mastra/core/mastra';
import { PinoLogger } from '@mastra/loggers';
import { teachWorkflow, quickAnswerWorkflow, learningPathWorkflow } from './workflows';
import { teacherAgent } from './agents';
import { educationTool } from './tools';

import { LogLevel } from '@mastra/core';

export const mastra = new Mastra({
  workflows: {
    teachWorkflow,
    quickAnswerWorkflow,
    learningPathWorkflow,
  },
  agents: { teacherAgent },
  logger: new PinoLogger({
    name: 'Mastra',
    level: (process.env.LOG_LEVEL as LogLevel) || 'info',
  }),
});
