import ProductCard from "@/components/ProductCard";

// Dummy product data
const products = [
  {
    id: 1,
    name: "Product 1",
    price: 29.99,
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 2,
    name: "Product 2",
    price: 49.99,
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 3,
    name: "Product 3",
    price: 19.99,
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 4,
    name: "Product 4",
    price: 39.99,
    image: "https://via.placeholder.com/300x200",
  },
];

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-6">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}