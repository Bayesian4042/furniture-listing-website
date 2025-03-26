import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function FurnitureLoading() {
  return (
    <div className="container mx-auto py-8">
      <Skeleton className="h-12 w-64 mb-8" data-testid="page-title-skeleton" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((index) => (
          <Card key={index} className="flex flex-col" data-testid="furniture-card-skeleton">
            <CardHeader>
              <div className="flex items-center justify-between">
                  <Skeleton className="h-6 w-32" data-testid="card-title-skeleton" />
                <Skeleton className="h-6 w-24" data-testid="status-skeleton" />
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <Skeleton className="aspect-square w-full mb-4" data-testid="image-skeleton" />
              <Skeleton className="h-4 w-full mb-2" data-testid="description-skeleton" />
              <Skeleton className="h-4 w-3/4 mb-4" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-32" data-testid="category-skeleton" />
                <Skeleton className="h-4 w-24" data-testid="rating-skeleton" />
              </div>
            </CardContent>
            <CardFooter className="border-t pt-4">
              <div className="flex items-center justify-between w-full">
                <Skeleton className="h-8 w-24" data-testid="price-skeleton" />
                <Skeleton className="h-10 w-32" data-testid="button-skeleton" />
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
