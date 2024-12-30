import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-8rem)] flex flex-col items-center justify-center p-4">
      <div className="card text-center">
        <h1 className="text-4xl font-bold mb-2">
          BetterToDo
        </h1>
        <p className="text-zinc-400 mb-8">
          AI-powered task management
        </p>
        <Link href="/tasks" className="button">
          Get Started
        </Link>
      </div>
    </div>
  );
}
