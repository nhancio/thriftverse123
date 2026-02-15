import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const AUTOPLAY_DELAY_MS = 5000;

const cards = [
  {
    image: "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?w=1600",
    line1: "Live the royal life,",
    line2: "Now",
  },
  {
    image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=1600",
    line1: "Thrift, Not Spend",
    line2: "Save more.",
  },
  {
    image: "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=1600",
    line1: "Unlock the experiences,",
    line2: "in reach",
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
  const [api, setApi] = useState<CarouselApi | null>(null);

  useEffect(() => {
    if (!api) return;
    const interval = setInterval(() => {
      api.scrollNext();
      if (!api.canScrollNext()) api.scrollTo(0);
    }, AUTOPLAY_DELAY_MS);
    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="relative pt-1 sm:pt-2 pb-2 sm:pb-3 md:pb-4 overflow-hidden flex flex-col items-center justify-start min-h-0">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background z-0" />

      {/* Flowing Text Background */}
      <div className="absolute top-0 left-0 right-0 z-10 flex flex-col gap-0">
        <MarqueeText text="THRYFT" direction="left" />
        <MarqueeText text="FLEX" direction="right" />
        <MarqueeText text="VIBE" direction="left" />
      </div>

      <div className="relative z-20 flex flex-col w-full">
        {/* Heading area */}
        <div className="container text-center shrink-0 pb-0">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-0.5 sm:mb-1 tracking-tight"
          >
            Welcome to <span className="gradient-text">Thryft</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xs sm:text-sm md:text-base text-muted-foreground max-w-2xl mx-auto font-light px-2"
          >
            Premium pre-owned products at unbeatable prices. Your gateway to luxury, sustainably.
          </motion.p>
        </div>

        {/* Hero carousel — reduced width, centered, one slide at a time, auto-plays */}
        <div className="w-full mt-2 sm:mt-3 px-3 sm:px-4">
          <div className="max-w-4xl mx-auto">
          <Carousel
            setApi={setApi}
            opts={{ loop: true, align: "start" }}
            className="w-full"
          >
            <CarouselContent className="ml-0">
              {cards.map((card, index) => (
                <CarouselItem key={index} className="pl-0 basis-full">
                  <div className="w-full overflow-hidden rounded-xl sm:rounded-2xl">
                    <div
                      className="relative w-full bg-black/5"
                      style={{ aspectRatio: "3/1", minHeight: "180px" }}
                    >
                      <img
                        src={card.image}
                        alt={`${card.line1} ${card.line2}`}
                        className="absolute inset-0 w-full h-full object-cover"
                        onError={(e) => {
                          const t = e.target as HTMLImageElement;
                          if (!t.dataset.fallback) {
                            t.dataset.fallback = "1";
                            t.src = "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600";
                          }
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-transparent" />
                      <div className="absolute inset-0 flex flex-col items-start justify-center pl-5 sm:pl-8 md:pl-12 text-left">
                        <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold leading-tight font-display tracking-wide antialiased drop-shadow-lg">
                          <span className="text-primary-foreground">{card.line1}</span>
                          <br />
                          <span className="text-primary">{card.line2}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-2 sm:left-0 h-8 w-10 sm:h-9 sm:w-15" />
            <CarouselNext className="-right-2 sm:right-0 h-8 w-10 sm:h-9 sm:w-15" />
          </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
