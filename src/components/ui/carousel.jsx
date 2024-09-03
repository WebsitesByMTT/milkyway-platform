"use client";
import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";

import { cn } from "../../lib/utils";
import { Button } from "./button";

const CarouselContext = React.createContext(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }

  return context;
}

const Carousel = React.forwardRef(
  (
    {
      orientation = "horizontal",
      opts,
      setApi,
      plugins,
      className,
      children,
      onSlideChange,
      ...props
    },
    ref
  ) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: "x",
      },
      plugins
    );
    const [canScrollPrev, setCanScrollPrev] = React.useState(false);
    const [canScrollNext, setCanScrollNext] = React.useState(false);

    const startY = React.useRef(null);
    const currentY = React.useRef(null);

    const handleTouchStart = (event) => {
      startY.current = event.touches[0].clientY;
      
    };

    const handleTouchMove = (event) => {
      currentY.current = event.touches[0].clientY;
    };

    const handleTouchEnd = () => {
      if (startY.current !== null && currentY.current !== null) {
        const diff = startY.current - currentY.current;

        if (Math.abs(diff) > 30) {
          if (diff > 0) {
            api.scrollNext();
          } else {
            api.scrollPrev();
          }
        }
      }

      startY.current = null;
      currentY.current = null;
    };

    const onSelect = React.useCallback(
      (api) => {
        if (!api) return;

        const selectedIndex = api.selectedScrollSnap();
        setCanScrollPrev(api.canScrollPrev());
        setCanScrollNext(api.canScrollNext());
        if (onSlideChange) onSlideChange(selectedIndex);
      },
      [onSlideChange]
    );

    React.useEffect(() => {
      if (!api || !setApi) return;
      setApi(api);
    }, [api, setApi]);

    React.useEffect(() => {
      if (!api) return;
      onSelect(api);
      api.on("reInit", onSelect);
      api.on("select", onSelect);
      return () => {
        api.off("select", onSelect);
      };
    }, [api, onSelect]);

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api,
          opts,
          orientation,
          scrollPrev: () => api.scrollPrev(),
          scrollNext: () => api.scrollNext(),
          canScrollPrev,
          canScrollNext,
        }}
      >
        <div
          ref={ref}
          className={cn("relative", className)}
          role="region"
          aria-roledescription="carousel"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    );
  }
);
Carousel.displayName = "Carousel";

const CarouselContent = React.forwardRef(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel();

  return (
    <div ref={carouselRef} className="overflow-hidden h-full">
      <div
        ref={ref}
        className={cn(
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className
        )}
        {...props}
      />
    </div>
  );
});
CarouselContent.displayName = "CarouselContent";

const CarouselItem = React.forwardRef(({ className, ...props }, ref) => {
  const { orientation } = useCarousel();

  return (
    <div
      ref={ref}
      role="group"
      aria-roledescription="slide"
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      )}
      {...props}
    />
  );
});
CarouselItem.displayName = "CarouselItem";

const CarouselPrevious = React.forwardRef(
  ({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { orientation, scrollPrev, canScrollPrev } = useCarousel();

    return (
      <Button
        ref={ref}
        size={size}
        className={cn(
          "absolute  h-8 w-8 rounded-full",
          orientation === "horizontal"
            ? "-left-[0.22rem] top-1/2 -translate-y-1/2"
            : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
          className
        )}
        disabled={!canScrollPrev}
        onClick={scrollPrev}
        {...props}
      >
        <svg
          width="20"
          height="38"
          viewBox="0 0 30 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.4777 24.3562L27.6101 40.1594C28.4086 40.9708 28.8485 42.0545 28.8386 43.1773C28.8286 44.3014 28.3684 45.3788 27.5537 46.1769C26.7386 46.9753 25.634 47.43 24.4771 47.4398C23.3216 47.4497 22.2102 47.015 21.3813 46.2323L1.7846 27.0354C1.78458 27.0354 1.78456 27.0354 1.78454 27.0354C0.96081 26.2282 0.5 25.1358 0.5 23.999C0.5 22.8622 0.96081 21.7697 1.78454 20.9626C1.78456 20.9625 1.78458 20.9625 1.7846 20.9625L21.3845 1.76261C22.2089 0.955307 23.3289 0.5 24.499 0.5C25.669 0.5 26.789 0.955307 27.6134 1.76261C28.4371 2.5698 28.8979 3.66218 28.8979 4.79897C28.8979 5.93579 28.4371 7.0282 27.6134 7.83539C27.6133 7.83541 27.6133 7.83543 27.6133 7.83545L11.4777 23.6418L11.113 23.999L11.4777 24.3562Z"
            fill="white"
            stroke="url(#paint0_linear_115_1679)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_115_1679"
              x1="-0.301026"
              y1="23.999"
              x2="29.699"
              y2="23.999"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#2C69CD" />
              <stop offset="1" stop-color="#285FBA" />
            </linearGradient>
          </defs>
        </svg>

        <span className="sr-only">Previous slide</span>
      </Button>
    );
  }
);
CarouselPrevious.displayName = "CarouselPrevious";

const CarouselNext = React.forwardRef(
  ({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { orientation, scrollNext, canScrollNext } = useCarousel();

    return (
      <Button
        ref={ref}
        size={size}
        className={cn(
          "absolute h-8 w-8 rounded-full transition-transform duration-600",
          orientation === "horizontal"
            ? "-right-0 top-1/2 -translate-y-1/2"
            : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
          className
        )}
        disabled={!canScrollNext}
        onClick={scrollNext}
        {...props}
      >
        <svg
          width="20"
          height="38"
          viewBox="0 0 30 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"

        >
          <path
            d="M4.92085 0.500163C6.07633 0.490327 7.18768 0.925024 8.01655 1.70772L27.6133 20.9045C27.6133 20.9046 27.6133 20.9046 27.6134 20.9046C28.4371 21.7118 28.8979 22.8042 28.8979 23.941C28.8979 25.0778 28.4371 26.1702 27.6134 26.9774C27.6133 26.9775 27.6133 26.9775 27.6133 26.9775L8.01342 46.1774C7.18905 46.9847 6.06896 47.44 4.89895 47.44C3.72899 47.44 2.60896 46.9847 1.7846 46.1775C0.960831 45.3703 0.5 44.2779 0.5 43.141C0.5 42.0042 0.96083 40.9117 1.7846 40.1045L17.9202 24.2982L18.2849 23.941L17.9202 23.5838L1.78774 7.78057C0.989298 6.96918 0.54937 5.88547 0.55933 4.76273C0.569302 3.63859 1.02952 2.56115 1.84423 1.76307C2.65928 0.964658 3.76394 0.510011 4.92085 0.500163Z"
            fill="white"
            stroke="url(#paint0_linear_115_1678)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_115_1678"
              x1="29"
              y1="24"
              x2="-6.96286e-07"
              y2="24"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#2C69CD" />
              <stop offset="1" stop-color="#22509B" />
            </linearGradient>
          </defs>
        </svg>
        <span className="sr-only">Next slide</span>
      </Button>
    );
  }
);
CarouselNext.displayName = "CarouselNext";

export {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
};
