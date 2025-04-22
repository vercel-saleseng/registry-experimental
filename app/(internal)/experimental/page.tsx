import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Lightbulb } from "lucide-react";

export default function Page() {
  return (
    <div className="container p-6">
      <div className="space-y-6">
        <section>
          <Card>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg font-medium text-[var(--zds-text-stronger)]">
                    IBM Carbon
                  </CardTitle>
                  <CardDescription>
                    Opens a form built with the{" "}
                    <a
                      className="text-primary hover:text-primary/90 underline"
                      href="https://carbondesignsystem.com/"
                    >
                      Carbon
                    </a>{" "}
                    design system.
                  </CardDescription>
                </div>

                <a href="https://v0.dev/chat/api/open?url=https%3A%2F%2Fregistry-demo-xi.vercel.app%2Fr%2Fcarbon.json">
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
                  src="/carbon"
                  className="w-full h-full"
                  title="Carbon"
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
                    CMS
                  </CardTitle>
                  <CardDescription>
                    Opens a sandbox built with the{" "}
                    <a
                      className="text-primary hover:text-primary/90 underline"
                      href="https://design.cms.gov/?theme=core/"
                    >
                      CMS
                    </a>{" "}
                    design system.
                  </CardDescription>
                </div>

                <a href="https://v0.dev/chat/api/open?url=https%3A%2F%2Fregistry-demo-xi.vercel.app%2Fr%2Fcms.json">
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
              <Alert className="mb-6">
                <Lightbulb className="h-4 w-4" />
                <AlertTitle>Good to Know</AlertTitle>
                <AlertDescription>
                  This sandbox loads the CMS design system’s web components via
                  CDN. Since v0 generates React code, the{" "}
                  <a
                    className="text-primary hover:text-primary/90 underline"
                    href="https://brianperry.dev/posts/2021/working-around-reacts-web-component-limitations/"
                  >
                    usual limitations
                  </a>{" "}
                  of using web components in React still apply.
                </AlertDescription>
              </Alert>
              <div
                className={`h-[800px] w-full rounded-md border border-border overflow-hidden`}
              >
                <iframe src="/cms" className="w-full h-full" title="CMS" />
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
