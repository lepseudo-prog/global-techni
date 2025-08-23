import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          GlobalTechni
        </Link>
        <div className="flex space-x-4">
          <Link href="/">
            <Button variant="ghost">Home</Button>
          </Link>
          <Link href="/products">
            <Button variant="ghost">Products</Button>
          </Link>
          <Link href="/cart">
            <Button variant="ghost">Cart</Button>
          </Link>
        </div>
      </nav>
    </header>
  );
}