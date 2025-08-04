import { Mastra } from '@mastra/core/mastra';
import { PinoLogger } from '@mastra/loggers';
import workflows from './workflows/index.js';
import { teacherAgent } from './agents/index.js';

export const mastra = new Mastra({
  workflows: workflows,
  agents: { teacherAgent },
  logger: new PinoLogger({
    name: 'Mastra',
    level: 'info',
  }),
});
