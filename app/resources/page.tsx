import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Vetted directory of Kitsap County resources for fathers. Coming soon.",
};

export default function ResourcesPage() {
  return (
    <div className="prose-measure">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        Resources
      </h1>
      <p className="mt-4 text-lg text-slate-700">
        Our vetted directory of Kitsap County resources for fathers is coming
        soon. It will include local partners, support services, and meetup
        information.
      </p>
    </div>
  );
}
