import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { MenuCard } from "./MenuCard";
import type { MenuItems } from "@/types/menu";
import React from "react";
import Autoplay from "embla-carousel-autoplay";

export function MenuCarousel({ menu }: { menu: MenuItems }) {
  const topItems = menu.filter((item) => item.rate === 5).slice(0, 5);
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <div className="w-full p-8">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full mx-auto"
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="flex gap-4">
          {topItems.map((item) => (
            <CarouselItem
              key={item.id}
              className="flex-none w-full sm:w-1/2 md:w-1/3"
            >
              <div className="p-1">
                <MenuCard menu={item} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
