import { mastra } from '../../mastra/index.js';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { message } = req.body;

  const agent = mastra.getAgent('teacherAgent');
  const result = await agent.run(message);

  res.status(200).json({ response: result });
}
