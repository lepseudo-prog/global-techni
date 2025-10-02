import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";

import { BannerCarousel } from '@/components/ui/BannerCarousel'

const slides = [
    {
      title: 'Innovating the Future',
      description: 'At GlobalTechni, we build solutions for tomorrow.',
      image: '/images/banner1.jpg',
      cta: { label: 'Learn More', href: '/about' },
    },
    {
      title: 'Cutting-Edge Technology',
      description: 'Empowering businesses with AI & cloud innovation.',
      image: '/images/banner2.jpg',
      cta: { label: 'Our Services', href: '/services' },
    },
    {
      title: 'Join the Revolution',
      description: 'Partner with us to shape the digital world.',
      image: '/images/banner3.jpg',
      cta: { label: 'Contact Us', href: '/contact' },
    },
  ]
// Dummy product data
const products = [
  {
    id: 1,
    name: "Produit 1",
    price: 29.99,
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 2,
    name: "Produit 2",
    price: 49.99,
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 3,
    name: "Produit 3",
    price: 19.99,
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 4,
    name: "Produit 4",
    price: 39.99,
    image: "https://via.placeholder.com/300x200",
  },
];

// Services section data
const services = [
  {
    title: "Acheter des accessoires et produits électroniques",
    description:
      "Découvrez notre gamme de produits électroniques, recevez des mises à jour par e-mail et obtenez des factures instantanés.",
    image: "/images/services/shop.jpg",
    cta: "Acheter maintenant",
    link: "/shop",
  },
  {
    title: "Demander des réparations de téléphone mobile",
    description:
      "Demandez facilement des réparations, suivez les étapes de réparation et recevez vos reçus en ligne.",
    image: "/images/services/repairs.jpg",
    cta: "Demander une réparation",
    link: "/repairs",
  },
  {
    title: "Location avec option d'achat (LOA)",
    description:
      "Louer un smartphone ? Avec GlobalTechni c'est maintenant possible, benéficiez de nombreux avantages comme l'upgrade et le SAV !",
    image: "/images/services/loa.jpg",
    cta: "Louer maintenant",
    link: "/loa",
  },
];

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Services Section */}
      <h1 className="text-4xl font-bold text-center mb-12">
        Bienvenue chez GlobalTechni
      </h1>
      <BannerCarousel slides={slides} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {services.map((service, index) => (
          <div
            key={index}
            className="rounded-2xl shadow-md hover:shadow-lg transition flex flex-col overflow-hidden"
          >
            <Image
              src={service.image}
              alt={service.title}
              width={400}
              height={250}
              className="h-48 w-full object-cover"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
              <p className="text-gray-600 mb-4 flex-grow">{service.description}</p>
              <Button asChild>
                <a href={service.link}>{service.cta}</a>
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Products Section */}
      <h2 className="text-3xl font-bold mb-6">Nos produits</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
