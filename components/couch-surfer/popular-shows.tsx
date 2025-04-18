import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

interface Show {
  id: number
  name: string
  permalink: string
  start_date: string
  end_date: string | null
  country: string
  network: string
  status: string
  image_thumbnail_path: string
}

interface PopularShowsProps {
  shows: Show[]
}

export function PopularShows({ shows }: PopularShowsProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
      {shows.map((show) => (
        <Card key={show.id} className="overflow-hidden hover:shadow-md transition-shadow">
          <Link href={`/show/${show.id}`} className="block">
            <div className="aspect-[2/3] relative">
              <Image
                src={show.image_thumbnail_path || "/placeholder.svg?height=300&width=200"}
                alt={show.name}
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background to-transparent p-2">
                <div className="flex items-center gap-1 text-xs">
                  <Star className="w-3 h-3 text-primary" />
                  <span>{show.network}</span>
                </div>
              </div>
            </div>
            <CardContent className="p-3">
              <h3 className="font-medium text-sm line-clamp-2">{show.name}</h3>
              <p className="text-xs text-muted-foreground mt-1">{show.status}</p>
            </CardContent>
          </Link>
        </Card>
      ))}
    </div>
  )
}
