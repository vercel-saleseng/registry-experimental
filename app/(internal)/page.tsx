"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="p-6 space-y-6">
      <div className="space-y-12">
        <section>
          <Card>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg font-medium text-[var(--zds-text-stronger)]">
                    Starting Kit
                  </CardTitle>
                  <CardDescription>
                    Opens a blank app with the Cloudscape theme preconfigured.
                  </CardDescription>
                </div>
                <a href="https://v0.dev/chat/api/open?title=LumonCn+Starting+Kit&prompt=A+blank+app+with+the+Lumon+theme+preconfigured.+Begin+prompting+to+create+your+prototype%21+&url=https%3A%2F%2Fregistry-demo-ebqw-git-test-vercel-se-team-vtest314.vercel.app%2Fr%2Fstart.json">
                  <img
                    src="https://v0.dev/chat-static/button.svg"
                    alt="Open in v0"
                    width="99"
                    height="32"
                  />
                </a>
              </div>
            </CardHeader>
          </Card>
        </section>
        <section>
          <Card>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg font-medium text-[var(--zds-text-stronger)]">
                    Dashboard
                  </CardTitle>
                  <CardDescription>
                    Opens a complete dashboard implementation with sidebar,
                    stats cards, charts, and tables.
                  </CardDescription>
                </div>
                <a href="https://v0.dev/chat/api/open?title=Dashboard&prompt=A+complete+dashboard+implementation+with+sidebar%2C+stats+cards%2C+charts%2C+and+tables.&url=https%3A%2F%2Fregistry-demo-ebqw-git-test-vercel-se-team-vtest314.vercel.app%2Fr%2Fdashboard.json">
                  <img
                    src="https://v0.dev/chat-static/button.svg"
                    alt="Open in v0"
                    width="99"
                    height="32"
                  />
                </a>
              </div>
            </CardHeader>
            <CardContent>
              <div
                className={`h-[800px] w-full rounded-md border border-border overflow-hidden`}
              >
                <iframe
                  src="/dashboard"
                  className="w-full h-full"
                  title="Dashboard"
                />
              </div>
            </CardContent>
          </Card>
        </section>
        <section>
          <Card>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg font-medium text-[var(--zds-text-stronger)]">
                    Terminal
                  </CardTitle>
                  <CardDescription>
                    Opens an interactive terminal interface with number grid,
                    progress tracking, and file selection.
                  </CardDescription>
                </div>
                <a href="https://v0.dev/chat/api/open?title=Terminal&prompt=An+interactive+terminal+interface+with+number+grid%2C+progress+tracking%2C+and+file+selection.&url=https%3A%2F%2Fregistry-demo-ebqw-git-test-vercel-se-team-vtest314.vercel.app%2Fr%2Fterminal.json">
                  <img
                    src="https://v0.dev/chat-static/button.svg"
                    alt="Open in v0"
                    width="99"
                    height="32"
                  />
                </a>
              </div>
            </CardHeader>
            <CardContent>
              <div
                className={`h-[800px] w-full rounded-md border border-border overflow-hidden`}
              >
                <iframe
                  src="/terminal"
                  className="w-full h-full"
                  title="Terminal"
                />
              </div>
            </CardContent>
          </Card>
        </section>
        <section>
          <Card>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg font-medium text-[var(--zds-text-stronger)]">
                    Couch Surfer
                  </CardTitle>
                  <CardDescription>
                    Opens a fullstack TV show discovery app with show details,
                    search functionality, and popular shows listing.
                  </CardDescription>
                </div>
                <a href="https://v0.dev/chat/api/open?title=Dashboard&prompt=Zapier+Dashboard&url=https%3A%2F%2Fzinnia-registry.vercel.app%2Fr%2Fdashboard.json">
                  <img
                    src="https://v0.dev/chat-static/button.svg"
                    alt="Open in v0"
                    width="99"
                    height="32"
                  />
                </a>
              </div>
            </CardHeader>
            <CardContent>
              <div
                className={`h-[800px] w-full rounded-md border border-border overflow-hidden`}
              >
                <iframe
                  src="/couch-surfer"
                  className="w-full h-full"
                  title="Couch Surfer"
                />
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
