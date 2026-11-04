import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for kitsapfathersgroup.org.",
};

export default function PrivacyPage() {
  return (
    <div className="prose-measure">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        Privacy Policy
      </h1>
      <p className="mt-4 text-lg text-slate-700">
        This site collects no personal information. We do not use accounts,
        analytics, or tracking cookies at this time.
      </p>
      <p className="mt-4 text-lg text-slate-700">
        Links to external services, such as our Facebook Group, are governed
        by those services&apos; own privacy policies.
      </p>
      <p className="mt-4 text-lg text-slate-700">
        A full privacy policy will be published here before we collect any
        contact details.
      </p>
    </div>
  );
}
