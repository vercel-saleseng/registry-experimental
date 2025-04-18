"use client";

export default function Home() {
  return (
    <div className="p-6 space-y-6">
      <div className="space-y-12">
        <section>
          <div className="flex items-start justify-between p-2">
            <span className="flex flex-col">
              <h3 className="text-lg font-medium text-[var(--zds-text-stronger)]">
                Start
              </h3>
              <p>A blank app with a sidebar, header, and Zinnia styling.</p>
            </span>

            <a href="https://v0.dev/chat/api/open?title=Starter+Kit&prompt=A+blank+app+v0+generation+with+a+sidebar%2C+header%2C+and+Zinnia+styling.+Start+prompting+to+see+a+preview%21+&url=https%3A%2F%2Fzinnia-registry.vercel.app%2Fr%2Fstart.json">
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
            <iframe src="/start" className="w-full h-full" title="Dashboard" />
          </div>
        </section>
        <section>
          <div className="flex items-center justify-between p-2">
            <h3 className="text-lg font-medium text-[var(--zds-text-stronger)]">
              Dashboard
            </h3>
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
              src="/dashboard"
              className="w-full h-full"
              title="Dashboard"
            />
          </div>
        </section>
        <section>
          <div className="flex items-center justify-between p-2">
            <h3 className="text-lg font-medium text-[var(--zds-text-stronger)]">
              Terminal
            </h3>
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
              src="/terminal"
              className="w-full h-full"
              title="Terminal"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
