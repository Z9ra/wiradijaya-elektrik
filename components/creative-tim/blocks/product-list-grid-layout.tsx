"use client"

import { Card, CardContent } from "@/components/ui/card"

const PRODUCTS = [
  {
    id: 1,
    name: "Premium Suit",
    category: "New",
    price: "$1100",
    originalPrice: null,
    description:
      "The structured shoulders and sleek detailing ensure a sharp silhouette. Team it with a silk pocket square.",
    image: "https://v3.material-tailwind.com/coat-1.png",
    colors: [
      "bg-slate-950",
      "bg-white border border-slate-200",
      "bg-slate-200 border border-slate-200",
    ],
  },
  {
    id: 2,
    name: "Wool Suit",
    category: "Permanent Collection",
    price: "$1,300",
    originalPrice: "$2,300",
    description:
      "The structured shoulders and sleek detailing ensure a sharp silhouette. Team it with a silk pocket square.",
    image: "https://v3.material-tailwind.com/coat-2.png",
    colors: [
      "bg-slate-950",
      "bg-white border border-slate-200",
      "bg-slate-200 border border-slate-200",
    ],
  },
  {
    id: 3,
    name: "Cotton Suit",
    category: "Permanent Collection",
    price: "$790",
    originalPrice: null,
    description:
      "The structured shoulders and sleek detailing ensure a sharp silhouette. Team it with a silk pocket square.",
    image: "https://v3.material-tailwind.com/coat-3.png",
    colors: [
      "bg-slate-950",
      "bg-white border border-slate-200",
      "bg-slate-200 border border-slate-200",
    ],
  },
  {
    id: 4,
    name: "Linen Suit",
    category: "Sale",
    price: "$1,000",
    originalPrice: "$2,500",
    description:
      "The structured shoulders and sleek detailing ensure a sharp silhouette. Team it with a silk pocket square.",
    image: "https://v3.material-tailwind.com/coat-4.png",
    colors: [
      "bg-slate-950",
      "bg-white border border-slate-200",
      "bg-slate-200 border border-slate-200",
    ],
  },
  {
    id: 5,
    name: "Tweed Suit",
    category: "Sale",
    price: "$1,300",
    originalPrice: "$2,300",
    description:
      "The structured shoulders and sleek detailing ensure a sharp silhouette. Team it with a silk pocket square.",
    image: "https://v3.material-tailwind.com/coat-3.png",
    colors: [
      "bg-slate-950",
      "bg-white border border-slate-200",
      "bg-slate-200 border border-slate-200",
    ],
  },
  {
    id: 6,
    name: "Premium Suit",
    category: "Sale",
    price: "$990",
    originalPrice: "$1,240",
    description:
      "The structured shoulders and sleek detailing ensure a sharp silhouette. Team it with a silk pocket square.",
    image: "https://v3.material-tailwind.com/coat-4.png",
    colors: [
      "bg-slate-950",
      "bg-white border border-slate-200",
      "bg-slate-200 border border-slate-200",
    ],
  },
]

export default function ProductListGridLayout() {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((product) => (
            <Card key={product.id}>
              <CardContent className="p-0">
                <img
                  src={product.image}
                  alt={product.name}
                  className="m-2 mx-auto my-0 h-64 w-auto rounded"
                />
                <div className="p-6">
                  <small className="block text-sm font-semibold">
                    {product.category}
                  </small>
                  <p className="my-2 text-base font-semibold md:text-lg">
                    {product.name}
                  </p>
                  <p className="text-muted-foreground text-base">
                    {product.description}
                  </p>
                  <div className="my-6 flex gap-2">
                    {product.colors.map((colorClass, index) => (
                      <div
                        key={index}
                        className={`h-5 w-5 rounded ${colorClass}`}
                      />
                    ))}
                  </div>
                  <div className="mt-1 flex items-center gap-2">
                    {product.originalPrice && (
                      <p className="text-base font-semibold text-red-500 line-through md:text-lg">
                        {product.originalPrice}
                      </p>
                    )}
                    <p className="text-base font-semibold md:text-lg">
                      {product.price}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
