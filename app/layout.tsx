import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Kitsap Fathers Group",
    template: "%s | Kitsap Fathers Group",
  },
  description:
    "Kitsap Fathers Group is a community group pursuing fiscal sponsorship, connecting dads across Kitsap County with resources, meetups, and support.",
  icons: {
    icon: "/favicon.svg",
  },
};

const FACEBOOK_GROUP_URL = "https://www.facebook.com/groups/kitsapfathersgroup";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-white text-slate-900 antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <header className="border-b border-slate-200 bg-white">
          <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-2 px-4 py-4 sm:px-6">
            <Link
              href="/"
              className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl"
            >
              Kitsap Fathers Group
            </Link>
            <nav aria-label="Primary">
              <ul className="flex flex-wrap items-center gap-1 text-base sm:gap-2">
                <li>
                  <Link
                    href="/"
                    className="rounded px-3 py-2 font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="rounded px-3 py-2 font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <a
                    href={FACEBOOK_GROUP_URL}
                    className="rounded bg-blue-700 px-3 py-2 font-medium text-white hover:bg-blue-800"
                  >
                    Join the Group
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <main id="main-content" className="mx-auto w-full max-w-5xl flex-1 px-4 py-8 sm:px-6 sm:py-12">
          {children}
        </main>

        <footer className="border-t border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
            <p className="text-base font-semibold text-slate-900">
              Kitsap Fathers Group
            </p>
            <p className="mt-1 max-w-prose text-sm text-slate-600">
              A community group pursuing fiscal sponsorship. Not yet a
              501(c)(3) organization.
            </p>
            <nav aria-label="Footer" className="mt-4">
              <ul className="flex flex-wrap gap-x-6 gap-y-2 text-base">
                <li>
                  <a
                    href={FACEBOOK_GROUP_URL}
                    className="text-blue-700 underline hover:text-blue-900"
                  >
                    Facebook Group
                  </a>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="text-blue-700 underline hover:text-blue-900"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-blue-700 underline hover:text-blue-900"
                  >
                    Terms of Use
                  </Link>
                </li>
                <li>
                  <Link
                    href="/accessibility"
                    className="text-blue-700 underline hover:text-blue-900"
                  >
                    Accessibility
                  </Link>
                </li>
              </ul>
            </nav>
            <p className="mt-4 text-sm text-slate-500">
              &copy; {new Date().getFullYear()} Kitsap Fathers Group. All
              rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
