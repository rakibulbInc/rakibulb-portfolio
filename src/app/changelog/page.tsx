import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getChangelog, splitInlineCode } from '@/lib/changelog';
import { APP_VERSION } from '@/lib/version';

export const metadata: Metadata = {
  title: "Changelog | Rakibul's Devfolio",
  description: 'Every notable change made to this site, newest first.',
};

const ChangelogPage = () => {
  const releases = getChangelog();

  return (
    <main className="min-h-screen h-screen overflow-hidden flex flex-col px-4 md:px-20 lg:px-32 xl:px-48 py-4 md:py-8">
      <div className="mb-6 md:mb-12">
        <Navbar />
      </div>

      <div className="flex-1 overflow-y-auto overflow-x-hidden no-scrollbar">
        <div className="w-full max-w-xl mx-auto py-4 space-y-10">
          <div className="space-y-1">
            <h1 className="text-white/90 text-3xl md:text-4xl font-bold">Changelog</h1>
            <p className="text-white/50 text-base">
              Currently on{' '}
              <span className="font-mono text-primary">v{APP_VERSION}</span>. Every
              notable change, newest first.
            </p>
          </div>

          <div className="space-y-8">
            {releases.map((release) => (
              <section key={release.version} className="space-y-3">
                <div className="flex items-baseline gap-3 border-b border-white/10 pb-2">
                  <h2 className="font-mono text-primary text-base font-bold">
                    v{release.version}
                  </h2>
                  <time className="text-white/30 text-xs" dateTime={release.date}>
                    {release.date}
                  </time>
                </div>

                {release.groups.map((group) => (
                  <div key={group.label} className="space-y-1.5">
                    <h3 className="text-white/70 text-xs font-semibold uppercase tracking-wide">
                      {group.label}
                    </h3>
                    <ul className="space-y-1.5">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-white/60 text-sm"
                        >
                          <span className="text-primary/70 mt-0.5">•</span>
                          <span>
                            {splitInlineCode(item).map((segment, idx) =>
                              segment.code ? (
                                <code
                                  key={idx}
                                  className="font-mono text-xs text-primary/80 bg-primary/10 rounded px-1 py-0.5"
                                >
                                  {segment.text}
                                </code>
                              ) : (
                                <span key={idx}>{segment.text}</span>
                              )
                            )}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </section>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default ChangelogPage;
