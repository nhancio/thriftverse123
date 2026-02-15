import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ProductCard";
import { useProducts } from "@/hooks/useProducts";

export function ProductsSection() {
  const { products } = useProducts();
  return (
    <section className="pt-2 sm:pt-3 md:pt-5 pb-4 sm:pb-6 md:pb-8">
      <div className="container px-3 sm:px-4">
        <div className="flex items-center justify-between mb-2 sm:mb-3">
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-bold">
              Fresh Finds
            </h2>
            <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">
              Just dropped, don't miss out
            </p>
          </div>
          <Link to="/browse">
            <Button variant="ghost" size="sm" className="gap-1.5 text-sm">
              See all
              <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
          {products.slice(0, 8).map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
