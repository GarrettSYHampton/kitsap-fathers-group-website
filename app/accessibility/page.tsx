import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accessibility",
  description:
    "Accessibility statement for kitsapfathersgroup.org. Our goal is WCAG 2.2 AA.",
};

export default function AccessibilityPage() {
  return (
    <div className="prose-measure">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        Accessibility Statement
      </h1>
      <p className="mt-4 text-lg text-slate-700">
        Kitsap Fathers Group aims to make this site usable by everyone. Our
        goal is to conform to WCAG 2.2 Level AA.
      </p>
      <p className="mt-4 text-lg text-slate-700">
        Measures already in place include a skip-to-content link, visible
        keyboard focus indicators, semantic page structure, and mobile-first
        readable type.
      </p>
      <p className="mt-4 text-lg text-slate-700">
        A full accessibility statement, including how to report barriers,
        will be published here soon.
      </p>
    </div>
  );
}
