import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of use for kitsapfathersgroup.org.",
};

export default function TermsPage() {
  return (
    <div className="prose-measure">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        Terms of Use
      </h1>
      <p className="mt-4 text-lg text-slate-700">
        Content on this site is provided for general information only. It is
        not professional, medical, or legal advice.
      </p>
      <p className="mt-4 text-lg text-slate-700">
        Full terms of use will be published here soon.
      </p>
    </div>
  );
}
