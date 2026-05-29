import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Home() {
  const { userId } = await auth();
  if (userId) redirect("/dashboard");

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-white">
      <div className="max-w-lg text-center flex flex-col items-center gap-6">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
          SchoolKit
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Real-time support for Computer Science teachers. Lesson plans, AI
          assistance, and classroom tools — all in one place.
        </p>
        <div className="flex gap-3">
          <Link
            href="/sign-in"
            className="rounded-lg bg-gray-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-700 transition-colors"
          >
            Sign in
          </Link>
          <Link
            href="/sign-up"
            className="rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Create account
          </Link>
        </div>
      </div>
    </main>
  );
}
