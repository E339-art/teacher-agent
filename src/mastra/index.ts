import { Mastra } from '@mastra/core/mastra';
import { PinoLogger } from '@mastra/loggers';
import { teachWorkflow } from './workflows';
import { teacherAgent } from './agents';

export const mastra = new Mastra({
  workflows: { teachWorkflow },
  agents: { teacherAgent },
  logger: new PinoLogger({
    name: 'Mastra',
    level: 'info',
  }),
});
