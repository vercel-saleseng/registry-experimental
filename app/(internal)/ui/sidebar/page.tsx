"use client";

export default function SidebarShowcase() {
  return (
    <div className="p-6 space-y-6">
      <div className="mb-8">
        <h2 className="mb-4 text-xl font-semibold text-[var(--zds-text-stronger)]">
          Side Navigation Component
        </h2>
        <p className="text-sm text-[var(--zds-text-default)]">
          A composable sidebar navigation component built with Shadcn UI
          primitives.
        </p>
      </div>

      <div className="space-y-12">
        <section>
          <h3 className="mb-4 text-lg font-medium text-[var(--zds-text-stronger)]">
            Zapier-Styled Side Navigation
          </h3>
          <div
            className={`h-[800px] w-full rounded-md border border-border overflow-hidden`}
          >
            <iframe
              src="/sidebar-example"
              className="w-full h-full"
              title="Sidebar Example"
            />
          </div>
        </section>

        <section>
          <h3 className="mb-4 text-lg font-medium text-[var(--zds-text-stronger)]">
            Customization Options
          </h3>
          <div className="rounded-md bg-muted p-6">
            <div className="prose prose-sm">
              <p>The Sidebar component accepts the following props:</p>
              <ul>
                <li>
                  <code>variant</code>: "sidebar" | "floating" | "inset" -
                  Controls the visual appearance and behavior
                </li>
                <li>
                  <code>collapsible</code>: "offcanvas" | "icon" | "none" -
                  Defines how the sidebar collapses
                </li>
                <li>
                  <code>side</code>: "left" | "right" - Which side the sidebar
                  appears on
                </li>
                <li>
                  <code>className</code>: Additional CSS classes to apply
                </li>
              </ul>
              <p>
                For more advanced customization, you can use the{" "}
                <code>useSidebar</code> hook to access and control sidebar
                state.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
