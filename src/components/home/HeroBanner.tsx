import { motion } from "framer-motion";
import cardRoyal from "@/assets/card-royal.jpg";
import cardSave from "@/assets/card-save.jpg";
import cardExperiences from "@/assets/card-experiences.jpg";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const cards = [
  {
    image: cardRoyal,
    message: "Live the royal life, Now",
  },
  {
    image: cardSave,
    message: "Thrift, Not Spend",
  },
  {
    image: cardExperiences,
    message: "Unlock the experiences, in the reach",
  },
];

const MarqueeText = ({ text, direction = "left" }: { text: string; direction?: "left" | "right" }) => {
  return (
    <div className="flex overflow-hidden whitespace-nowrap opacity-[0.08] select-none pointer-events-none">
      <motion.div
        animate={{ x: direction === "left" ? "-50%" : "0%" }}
        initial={{ x: direction === "left" ? "0%" : "-50%" }}
        transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
        className="flex gap-8 min-w-full"
      >
        {Array.from({ length: 20 }).map((_, i) => (
          <span key={i} className="text-[6rem] sm:text-[8rem] md:text-[11rem] lg:text-[14rem] font-black uppercase leading-none font-display text-gray-400">
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export function HeroBanner() {
  return (
    /* h = viewport minus sticky header (4rem) so everything fits without scroll */
    <section className="relative py-4 sm:py-6 md:py-8 overflow-hidden flex flex-col items-center justify-start h-[calc(100dvh-4rem)]">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background z-0" />

      {/* Flowing Text Background */}
      <div className="absolute top-0 left-0 right-0 z-10 flex flex-col gap-0">
        <MarqueeText text="THRYFT" direction="left" />
        <MarqueeText text="FLEX" direction="right" />
        <MarqueeText text="VIBE" direction="left" />
      </div>

      <div className="container relative z-20 flex flex-col flex-1 min-h-0">
        {/* Heading area — compact */}
        <div className="text-center mb-2 sm:mb-3 md:mb-4 shrink-0">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-2 sm:mb-3 tracking-tight"
          >
            Welcome to <span className="gradient-text">Thryft</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-sm sm:text-base md:text-xl text-muted-foreground max-w-2xl mx-auto font-light"
          >
            Premium pre-owned products at unbeatable prices. Your gateway to luxury, sustainably.
          </motion.p>
        </div>

        {/* Hero Carousel — fills remaining space */}
        <div className="flex-1 min-h-0 flex items-center justify-center mt-2 sm:mt-3 md:mt-4">
          <Carousel className="w-full max-w-6xl">
            <CarouselContent>
              {cards.map((card, index) => (
                <CarouselItem key={index} className="basis-[75%] sm:basis-1/2 lg:basis-1/3 pl-3 md:pl-4">
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.2 + index * 0.1,
                      duration: 0.6,
                      type: "spring",
                      stiffness: 70,
                      damping: 18,
                    }}
                    whileHover={{
                      scale: 1.03,
                      transition: { duration: 0.3, ease: "easeOut" },
                    }}
                    className="w-full cursor-pointer h-full"
                  >
                    <div className="glass-card rounded-2xl sm:rounded-[2rem] overflow-hidden shadow-2xl transition-shadow duration-500 hover:shadow-glow h-full">
                      {/* Use a max height so cards never overflow the viewport */}
                      <div className="relative bg-black/5 h-full" style={{ maxHeight: "calc(100dvh - 14rem)" }}>
                        <img
                          src={card.image}
                          alt={card.message}
                          className="w-full h-full object-cover"
                          style={{ minHeight: "180px" }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6 text-center">
                          <p className="text-white text-base sm:text-lg md:text-xl font-bold leading-tight font-display tracking-wide antialiased">
                            {card.message}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
