import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Kitsap Fathers Group: a community group pursuing fiscal sponsorship, supporting dads across Kitsap County.",
};

export default function AboutPage() {
  return (
    <div className="prose-measure">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        About Kitsap Fathers Group
      </h1>
      <p className="mt-4 text-lg text-slate-700">
        Kitsap Fathers Group is a community group pursuing fiscal
        sponsorship. We connect fathers across Kitsap County with local
        resources, meetups, and a supportive community.
      </p>
      <h2 className="mt-8 text-2xl font-bold">Our safety promises</h2>
      <ul className="mt-4 list-disc space-y-2 pl-6 text-lg text-slate-700">
        <li>100% human-reviewed content</li>
        <li>No auto-posts</li>
        <li>No photos of kids without consent</li>
      </ul>
      <p className="mt-8 text-lg text-slate-700">
        More about our story, partners, and meetups is coming soon.
      </p>
    </div>
  );
}
