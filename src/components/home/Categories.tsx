import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useProducts } from "@/hooks/useProducts";
import { handleImgError, PLACEHOLDER_IMG } from "@/lib/constants";

const categoryImages: Record<string, string> = {
  iPhone: "https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?w=800",
  MacBook: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800",
  Watch: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=800",
};

export function Categories() {
  const { categoryCounts } = useProducts();

  const categories = [
    { name: "iPhone", slug: "iPhone", image: categoryImages.iPhone },
    { name: "MacBook", slug: "MacBook", image: categoryImages.MacBook },
    { name: "Watch", slug: "Watch", image: categoryImages.Watch },
  ];

  return (
    <section className="py-5 sm:py-8 md:py-12 bg-muted/30">
      <div className="container px-3 sm:px-4">
        <div className="flex items-center justify-between mb-3 sm:mb-4">
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-bold">
              Shop by Category
            </h2>
            <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">
              Find exactly what you're looking for
            </p>
          </div>
          <Link
            to="/categories"
            className="hidden md:flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all text-sm"
          >
            View all categories
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          {categories.map((category, index) => (
            <motion.div
              key={category.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={`/browse?category=${category.slug}`}
                className="group block"
              >
                <div className="relative rounded-2xl overflow-hidden bg-card shadow-md hover:shadow-xl transition-all duration-300">
                  <div className="aspect-[4/3]">
                    <img
                      src={category.image}
                      alt={category.name}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => handleImgError(e, PLACEHOLDER_IMG)}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                    <h3 className="text-background font-semibold text-lg md:text-xl">
                      {category.name}
                    </h3>
                    <p className="text-background/70 text-sm">
                      {categoryCounts[category.name] ?? 0} items
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <Link
          to="/categories"
          className="mt-6 flex md:hidden items-center justify-center gap-2 text-primary font-medium"
        >
          View all categories
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
