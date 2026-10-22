import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--bg-primary)] text-[var(--text-primary)] px-6 text-center">
      <span className="text-sm font-bold uppercase tracking-widest text-[#9b6dff] mb-2">
        404 · Page Not Found
      </span>
      <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
        Lost in Cyberspace
      </h1>
      <p className="text-base text-[var(--text-secondary)] max-w-md mb-8">
        The page or resource you are looking for does not exist or has been relocated.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#7851A9] to-[#9b6dff] text-white text-sm font-semibold shadow-md hover:opacity-95 transition-opacity"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Return to Portfolio</span>
      </Link>
    </div>
  );
}
