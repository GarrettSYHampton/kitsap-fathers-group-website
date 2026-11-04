import Link from "next/link";

export default function HomePage() {
  return (
    <div className="prose-measure">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        Dads supporting dads across Kitsap County
      </h1>
      <p className="mt-4 text-lg text-slate-700">
        Kitsap Fathers Group connects fathers with local resources, meetups,
        and a supportive community. We are a community group pursuing fiscal
        sponsorship.
      </p>

      <section aria-labelledby="safety-promises" className="mt-10">
        <h2 id="safety-promises" className="text-2xl font-bold">
          Our safety promises
        </h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-lg text-slate-700">
          <li>100% human-reviewed content</li>
          <li>No auto-posts</li>
          <li>No photos of kids without consent</li>
        </ul>
      </section>

      <section aria-labelledby="get-started" className="mt-10">
        <h2 id="get-started" className="text-2xl font-bold">
          Get started
        </h2>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/about"
            className="rounded-lg bg-blue-700 px-5 py-3 text-center text-lg font-semibold text-white hover:bg-blue-800"
          >
            Learn about us
          </Link>
          <Link
            href="/resources"
            className="rounded-lg border border-slate-300 bg-white px-5 py-3 text-center text-lg font-semibold text-slate-900 hover:bg-slate-100"
          >
            Find resources
          </Link>
        </div>
      </section>
    </div>
  );
}
