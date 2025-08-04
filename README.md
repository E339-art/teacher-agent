# Teacher Agent

This project is a teacher agent that can provide thousands of lessons to users. It is built using the Mastra framework.

## Features

- **Teacher Agent**: An AI-powered teacher agent that can teach any topic to any audience.
- **Lesson Plan Workflow**: A workflow that can create a lesson plan for a given topic.
- **Frontend**: A simple frontend built with Next.js and React that allows users to interact with the agent through a web interface.
- **Google Generative AI Integration**: The agent is integrated with the Google Generative AI API to provide comprehensive and up-to-date information.
- **CI/CD Pipeline**: A simple CI/CD pipeline using GitHub Actions that builds the project on every push to the `main` branch.

## Setup

1. Copy `.env.example` to `.env` and fill in your API keys.
2. Install dependencies: `pnpm install`
3. Run the project: `pnpm dev`.

The frontend will be available at `http://localhost:3000`.

## Environment Variables

- `GOOGLE_GENERATIVE_AI_API_KEY`: Your Google API key. You can get one from the [Google AI Studio](https://makersuite.google.com/).
