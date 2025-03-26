import { DUMMY_FURNITURE } from "@/constants/furniture";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function FurniturePage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8">Our Furniture Collection</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {DUMMY_FURNITURE.map((furniture) => (
          <Card key={furniture.id} className="flex flex-col" role="article">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="text-xl">{furniture.name}</span>
                <Badge variant={furniture.inStock ? "default" : "destructive"}>
                  {furniture.inStock ? "In Stock" : "Out of Stock"}
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="aspect-square relative mb-4">
                <img
                  src={furniture.imageUrl}
                  alt={furniture.name}
                  className="object-cover rounded-lg w-full h-full"
                />
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                {furniture.description}
              </p>
              <div className="flex items-center gap-2 mb-2">
                <span className="font-semibold">Category:</span>
                <Badge variant="outline">{furniture.category}</Badge>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold">Rating:</span>
                <span className="text-yellow-500">★</span>
                <span>{furniture.rating}</span>
              </div>
            </CardContent>
            <CardFooter className="border-t pt-4">
              <div className="flex items-center justify-between w-full">
                <span className="text-2xl font-bold">${furniture.price.toFixed(2)}</span>
                <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md">
                  View Details
                </button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
