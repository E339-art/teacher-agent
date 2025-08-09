# Local Run Notes

- Server starts at http://localhost:4111 by default.
- Workflows: see /api/workflows
- Agents: see /api/agents
- Example generate:
  curl -X POST http://localhost:4111/api/agents/teacherAgent/generate -H "Content-Type: application/json" -d {messages:[role:user]}

