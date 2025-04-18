export default function Page() {
  return (
    <div className="p-6 space-y-6">
      <div className="space-y-12">
        <section>
          <div className="flex items-start justify-between p-2">
            <span className="flex flex-col">
              <h3 className="text-lg font-medium text-[var(--zds-text-stronger)]">
                Carbon Test
              </h3>
              <p>Opens a form built with the IBM Carbon design system.</p>
            </span>

            <a href="https://v0.dev/chat/api/open?url=https%3A%2F%2Fregistry-demo-xi.vercel.app%2Fr%2Fcarbon.json">
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
            <iframe src="/carbon" className="w-full h-full" title="Carbon" />
          </div>
        </section>
      </div>
    </div>
  );
}
