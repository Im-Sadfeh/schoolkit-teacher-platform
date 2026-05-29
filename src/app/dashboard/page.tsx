import { UserButton } from "@clerk/nextjs";
import { Ask } from "@/components/ask";

export default function DashboardPage() {
  return (
    <main className="flex min-h-screen flex-col p-8">
      <header className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold">SchoolKit</h1>
        <UserButton />
      </header>
      <div className="max-w-2xl w-full mx-auto">
        <Ask />
      </div>
    </main>
  );
}
