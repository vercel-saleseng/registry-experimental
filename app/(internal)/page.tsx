"use client";

export default function Home() {
  return (
    <div className="p-6 space-y-6">
      <div className="space-y-12">
        <section>
          <div className="flex items-start justify-between p-2">
            <span className="flex flex-col">
              <h3 className="text-lg font-medium text-[var(--zds-text-stronger)]">
                Starting Kit
              </h3>
              <p>Opens a blank app with the Lumon theme preconfigured.</p>
            </span>

            <a href="https://v0.dev/chat/api/open?title=LumonCn+Starting+Kit&prompt=A+blank+app+with+the+Lumon+theme+preconfigured.+Begin+prompting+to+create+your+prototype%21+&url=https%3A%2F%2Fregistry-demo-xi.vercel.app%2Fr%2Fstart.json">
              <img
                src="https://v0.dev/chat-static/button.svg"
                alt="Open in v0"
                width="99"
                height="32"
              />
            </a>
          </div>
        </section>
        <section>
          <div className="flex items-center justify-between p-2">
            <span className="flex flex-col">
              <h3 className="text-lg font-medium text-[var(--zds-text-stronger)]">
                Dashboard
              </h3>
              <p>
                Opens a complete dashboard implementation with sidebar, stats
                cards, charts, and tables.
              </p>
            </span>
            <a href="https://v0.dev/chat/api/open?title=Dashboard&prompt=A+complete+dashboard+implementation+with+sidebar%2C+stats+cards%2C+charts%2C+and+tables.&url=https%3A%2F%2Fregistry-demo-xi.vercel.app%2Fr%2Fdashboard.json">
              <img
                src="https://v0.dev/chat-static/button.svg"
                alt="Open in v0"
                width="99"
                height="32"
              />
            </a>
          </div>

          <div
            className={`h-[800px] w-full rounded-md border border-border overflow-hidden`}
          >
            <iframe
              src="/dashboard"
              className="w-full h-full"
              title="Dashboard"
            />
          </div>
        </section>
        <section>
          <div className="flex items-center justify-between p-2">
            <span className="flex flex-col">
              <h3 className="text-lg font-medium text-[var(--zds-text-stronger)]">
                Terminal
              </h3>
              <p>
                Opens an interactive terminal interface with number grid,
                progress tracking, and file selection.
              </p>
            </span>
            <a href="https://v0.dev/chat/api/open?title=Terminal&prompt=An+interactive+terminal+interface+with+number+grid%2C+progress+tracking%2C+and+file+selection.&url=https%3A%2F%2Fregistry-demo-xi.vercel.app%2Fr%2Fterminal.json">
              <img
                src="https://v0.dev/chat-static/button.svg"
                alt="Open in v0"
                width="99"
                height="32"
              />
            </a>
          </div>

          <div
            className={`h-[800px] w-full rounded-md border border-border overflow-hidden`}
          >
            <iframe
              src="/terminal"
              className="w-full h-full"
              title="Terminal"
            />
          </div>
        </section>
        <section>
          <div className="flex items-center justify-between p-2">
            <span className="flex flex-col">
              <h3 className="text-lg font-medium text-[var(--zds-text-stronger)]">
                Couch Surfer
              </h3>
              <p>
                Opens a fullstack TV show discovery app with show details,
                search functionality, and popular shows listing.
              </p>
            </span>
            <a href="https://v0.dev/chat/api/open?title=Dashboard&prompt=Zapier+Dashboard&url=https%3A%2F%2Fzinnia-registry.vercel.app%2Fr%2Fdashboard.json">
              <img
                src="https://v0.dev/chat-static/button.svg"
                alt="Open in v0"
                width="99"
                height="32"
              />
            </a>
          </div>

          <div
            className={`h-[800px] w-full rounded-md border border-border overflow-hidden`}
          >
            <iframe
              src="/couch-surfer"
              className="w-full h-full"
              title="Couch Surfer"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
