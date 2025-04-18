"use client";

import { Suspense } from "react";
import { ShowDetails } from "@/components/couch-surfer/show-details";
import { PopularShows } from "@/components/couch-surfer/popular-shows";
import { Loader2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SearchBar } from "@/components/couch-surfer/search-bar";

async function getShowDetails(id: string) {
  try {
    const res = await fetch(
      `https://www.episodate.com/api/show-details?q=${id}`
    );
    if (!res.ok) throw new Error("Failed to fetch show details");
    return res.json();
  } catch (error) {
    console.error("Error fetching show details:", error);
    return { tvShow: null, error: true };
  }
}

async function getPopularShows() {
  try {
    const res = await fetch(
      "https://www.episodate.com/api/most-popular?page=1"
    );
    if (!res.ok) throw new Error("Failed to fetch popular shows");
    return res.json();
  } catch (error) {
    console.error("Error fetching popular shows:", error);
    return { tv_shows: [], error: true };
  }
}

function LoadingState() {
  return (
    <div className="flex items-center justify-center min-h-[50vh]">
      <div className="flex flex-col items-center gap-2">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <p className="text-sm text-muted-foreground">Loading show data...</p>
      </div>
    </div>
  );
}

function ErrorState({ onRetry }: { onRetry: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] px-4 text-center">
      <AlertCircle className="h-12 w-12 text-destructive mb-4" />
      <h2 className="text-2xl font-bold mb-2">Something went wrong!</h2>
      <p className="text-muted-foreground mb-6 max-w-md">
        We couldn't load the show information. This might be due to a network
        issue or the API being temporarily unavailable.
      </p>
      <Button onClick={onRetry}>Try again</Button>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <header className="border-b border-border py-4">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
          <a href="/" className="text-xl font-bold text-primary">
            Couch Surfer
          </a>
          <Suspense>
            <SearchBar />
          </Suspense>
        </div>
      </header>

      <div className="min-h-screen py-8">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-2">Featured TV Show</h1>
        </header>

        <Suspense fallback={<LoadingState />}>
          <ShowDetailsSection />
        </Suspense>

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6 border-l-4 border-primary pl-4">
            Popular Shows You Might Like
          </h2>
          <Suspense fallback={<LoadingState />}>
            <PopularShowsSection />
          </Suspense>
        </div>
      </div>
    </>
  );
}

async function ShowDetailsSection() {
  const severanceData = await getShowDetails("20177");

  if (severanceData.error) {
    return <ErrorState onRetry={() => window.location.reload()} />;
  }

  return severanceData.tvShow ? (
    <ShowDetails show={severanceData.tvShow} />
  ) : null;
}

async function PopularShowsSection() {
  const popularShowsData = await getPopularShows();

  if (popularShowsData.error) {
    return <ErrorState onRetry={() => window.location.reload()} />;
  }

  return popularShowsData.tv_shows ? (
    <PopularShows shows={popularShowsData.tv_shows} />
  ) : null;
}
