# BetterToDo - AI-Powered Task Manager

An intelligent task management application that leverages OpenAI's GPT to help users organize and manage their tasks more effectively.

## Features

- AI-powered task generation and organization
- Calendar view for task scheduling
- Mobile-first responsive design
- MongoDB integration for data persistence
- Real-time task updates

## Tech Stack

- **Frontend**: Next.js, TypeScript, TailwindCSS, Emotion
- **Backend**: Next.js API Routes
- **Database**: MongoDB with Mongoose
- **AI Integration**: OpenAI GPT
- **Calendar**: FullCalendar.js

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory with the following variables:
   ```
   MONGODB_URI=your_mongodb_connection_string
   OPENAI_API_KEY=your_openai_api_key
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```

## Project Structure

```
better-todo/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Homepage
│   │   ├── tasks/
│   │   │   └── page.tsx          # Tasks view
│   │   └── calendar/
│   │       └── page.tsx          # Calendar view
│   ├── components/               # Reusable React components
│   ├── lib/                      # Utility functions
│   │   ├── db.ts                 # Database connection
│   │   └── gpt.ts               # GPT integration
│   └── models/                   # MongoDB schemas
└── public/                       # Static assets
```

## Contributing

Please read our contributing guidelines before submitting pull requests.

## License

MIT
