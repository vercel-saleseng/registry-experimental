"use client";

import { Suspense } from "react";
import { PopularShows } from "@/components/couch-surfer/popular-shows";
import Link from "next/link";
import { ArrowLeft, Loader2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SearchBar } from "@/components/couch-surfer/search-bar";

async function searchShows(query: string) {
  try {
    const res = await fetch(
      `https://www.episodate.com/api/search?q=${encodeURIComponent(
        query
      )}&page=1`
    );
    if (!res.ok) throw new Error("Failed to fetch search results");
    return res.json();
  } catch (error) {
    console.error("Error searching shows:", error);
    return { tv_shows: [], total: 0, error: true };
  }
}

function LoadingState() {
  return (
    <div className="flex items-center justify-center min-h-[50vh]">
      <div className="flex flex-col items-center gap-2">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <p className="text-sm text-muted-foreground">Searching for shows...</p>
      </div>
    </div>
  );
}

function ErrorState({ onRetry }: { onRetry: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] px-4 text-center">
      <AlertCircle className="h-12 w-12 text-destructive mb-4" />
      <h2 className="text-2xl font-bold mb-2">Search failed</h2>
      <p className="text-muted-foreground mb-6 max-w-md">
        We couldn't complete your search. This might be due to a network issue
        or the API being temporarily unavailable.
      </p>
      <Button onClick={onRetry}>Try again</Button>
    </div>
  );
}

export default function SearchPage({
  searchParams,
}: {
  searchParams: { q: string };
}) {
  const query = searchParams.q || "";

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
        <header className="mb-8 max-w-6xl mx-auto px-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <h1 className="text-3xl font-bold">Search Results for "{query}"</h1>
        </header>

        <div className="max-w-6xl mx-auto px-4">
          <Suspense fallback={<LoadingState />}>
            <SearchResultsSection query={query} />
          </Suspense>
        </div>
      </div>
    </>
  );
}

async function SearchResultsSection({ query }: { query: string }) {
  const searchData = await searchShows(query);

  if (searchData.error) {
    return <ErrorState onRetry={() => window.location.reload()} />;
  }

  return (
    <>
      <p className="text-muted-foreground mb-6">
        Found {searchData.total} results
      </p>

      {searchData.tv_shows && searchData.tv_shows.length > 0 ? (
        <PopularShows shows={searchData.tv_shows} />
      ) : (
        <div className="text-center py-12">
          <h2 className="text-xl font-medium mb-2">No shows found</h2>
          <p className="text-muted-foreground">
            Try searching with different keywords
          </p>
        </div>
      )}
    </>
  );
}
