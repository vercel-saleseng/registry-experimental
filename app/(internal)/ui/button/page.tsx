"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function ButtonShowcase() {
  const [focusedButton, setFocusedButton] = useState<string | null>(null);

  return (
    <div className="p-6 space-y-6">
      <div className="mb-8">
        <h2 className="mb-4 text-xl font-semibold text-[var(--zds-text-stronger)]">
          Button Component
        </h2>
      </div>

      <div className="space-y-12">
        <section>
          <h3 className="mb-4 text-lg font-medium text-[var(--zds-text-stronger)]">
            Button Variants
          </h3>
          <div className="flex flex-wrap gap-4">
            <Button variant="brand">Brand</Button>
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="tertiary">Tertiary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="danger">Danger</Button>
          </div>
        </section>

        <section>
          <h3 className="mb-4 text-lg font-medium text-[var(--zds-text-stronger)]">
            Button Sizes
          </h3>
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="brand" size="compact">
              Compact
            </Button>
            <Button variant="brand" size="sm">
              Small
            </Button>
            <Button variant="brand" size="md">
              Medium
            </Button>
            <Button variant="brand" size="lg">
              Large
            </Button>
          </div>
        </section>

        <section>
          <h3 className="mb-4 text-lg font-medium text-[var(--zds-text-stronger)]">
            Compact Button Variants
          </h3>
          <p className="mb-4 text-sm text-[var(--zds-text-default)]">
            Note the different font weights: Brand, Primary, and Danger use
            semibold (600), while others use medium (500).
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="brand" size="compact">
              Brand
            </Button>
            <Button variant="primary" size="compact">
              Primary
            </Button>
            <Button variant="secondary" size="compact">
              Secondary
            </Button>
            <Button variant="tertiary" size="compact">
              Tertiary
            </Button>
            <Button variant="ghost" size="compact">
              Ghost
            </Button>
            <Button variant="danger" size="compact">
              Danger
            </Button>
          </div>
        </section>

        <section>
          <h3 className="mb-4 text-lg font-medium text-[var(--zds-text-stronger)]">
            Focus State
          </h3>
          <p className="mb-4 text-sm text-[var(--zds-text-default)]">
            All buttons use the same focus ring color
            (--zds-ui-primary-stronger). Click a button to see its focus state.
          </p>
          <div className="flex flex-wrap gap-4">
            {[
              "brand",
              "primary",
              "secondary",
              "tertiary",
              "ghost",
              "danger",
            ].map((variant) => (
              <Button
                key={variant}
                variant={variant as any}
                className={focusedButton === variant ? "focus-visible" : ""}
                onClick={() => setFocusedButton(variant)}
              >
                {variant.charAt(0).toUpperCase() + variant.slice(1)}
              </Button>
            ))}
          </div>
        </section>

        <section>
          <h3 className="mb-4 text-lg font-medium text-[var(--zds-text-stronger)]">
            Disabled State
          </h3>
          <div className="flex flex-wrap gap-4">
            <Button variant="brand" disabled>
              Brand
            </Button>
            <Button variant="primary" disabled>
              Primary
            </Button>
            <Button variant="secondary" disabled>
              Secondary
            </Button>
            <Button variant="tertiary" disabled>
              Tertiary
            </Button>
            <Button variant="ghost" disabled>
              Ghost
            </Button>
            <Button variant="danger" disabled>
              Danger
            </Button>
          </div>
        </section>

        <section>
          <h3 className="mb-4 text-lg font-medium text-[var(--zds-text-stronger)]">
            With Icons
          </h3>
          <div className="flex flex-wrap gap-4">
            <Button variant="brand">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="M12 5v14" />
              </svg>
              Add New
            </Button>
            <Button variant="primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download
            </Button>
            <Button variant="secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              Search
            </Button>
          </div>
        </section>
      </div>

      <section className="mt-12">
        <h3 className="mb-4 text-lg font-medium text-[var(--zds-text-stronger)]">
          All Variants and Sizes
        </h3>

        <div className="space-y-8">
          {/* Brand Buttons */}
          <div className="space-y-2">
            <h4 className="text-md font-medium text-[var(--zds-text-default)]">
              Brand
            </h4>
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="brand" size="compact">
                Compact
              </Button>
              <Button variant="brand" size="sm">
                Small
              </Button>
              <Button variant="brand" size="md">
                Medium
              </Button>
              <Button variant="brand" size="lg">
                Large
              </Button>
            </div>
          </div>

          {/* Primary Buttons */}
          <div className="space-y-2">
            <h4 className="text-md font-medium text-[var(--zds-text-default)]">
              Primary
            </h4>
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="primary" size="compact">
                Compact
              </Button>
              <Button variant="primary" size="sm">
                Small
              </Button>
              <Button variant="primary" size="md">
                Medium
              </Button>
              <Button variant="primary" size="lg">
                Large
              </Button>
            </div>
          </div>

          {/* Secondary Buttons */}
          <div className="space-y-2">
            <h4 className="text-md font-medium text-[var(--zds-text-default)]">
              Secondary
            </h4>
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="secondary" size="compact">
                Compact
              </Button>
              <Button variant="secondary" size="sm">
                Small
              </Button>
              <Button variant="secondary" size="md">
                Medium
              </Button>
              <Button variant="secondary" size="lg">
                Large
              </Button>
            </div>
          </div>

          {/* Tertiary Buttons */}
          <div className="space-y-2">
            <h4 className="text-md font-medium text-[var(--zds-text-default)]">
              Tertiary
            </h4>
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="tertiary" size="compact">
                Compact
              </Button>
              <Button variant="tertiary" size="sm">
                Small
              </Button>
              <Button variant="tertiary" size="md">
                Medium
              </Button>
              <Button variant="tertiary" size="lg">
                Large
              </Button>
            </div>
          </div>

          {/* Ghost Buttons */}
          <div className="space-y-2">
            <h4 className="text-md font-medium text-[var(--zds-text-default)]">
              Ghost
            </h4>
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="ghost" size="compact">
                Compact
              </Button>
              <Button variant="ghost" size="sm">
                Small
              </Button>
              <Button variant="ghost" size="md">
                Medium
              </Button>
              <Button variant="ghost" size="lg">
                Large
              </Button>
            </div>
          </div>

          {/* Danger Buttons */}
          <div className="space-y-2">
            <h4 className="text-md font-medium text-[var(--zds-text-default)]">
              Danger
            </h4>
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="danger" size="compact">
                Compact
              </Button>
              <Button variant="danger" size="sm">
                Small
              </Button>
              <Button variant="danger" size="md">
                Medium
              </Button>
              <Button variant="danger" size="lg">
                Large
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h3 className="mb-4 text-lg font-medium text-[var(--zds-text-stronger)]">
          Disabled States
        </h3>
        <div className="space-y-8">
          {/* Disabled Buttons - All Variants */}
          <div className="space-y-2">
            <h4 className="text-md font-medium text-[var(--zds-text-default)]">
              All Variants (Disabled)
            </h4>
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="brand" disabled>
                Brand
              </Button>
              <Button variant="primary" disabled>
                Primary
              </Button>
              <Button variant="secondary" disabled>
                Secondary
              </Button>
              <Button variant="tertiary" disabled>
                Tertiary
              </Button>
              <Button variant="ghost" disabled>
                Ghost
              </Button>
              <Button variant="danger" disabled>
                Danger
              </Button>
            </div>
          </div>

          {/* Disabled Buttons - All Sizes */}
          <div className="space-y-2">
            <h4 className="text-md font-medium text-[var(--zds-text-default)]">
              All Sizes (Disabled)
            </h4>
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="brand" size="compact" disabled>
                Compact
              </Button>
              <Button variant="brand" size="sm" disabled>
                Small
              </Button>
              <Button variant="brand" size="md" disabled>
                Medium
              </Button>
              <Button variant="brand" size="lg" disabled>
                Large
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
