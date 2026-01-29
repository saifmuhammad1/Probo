import { useEffect, useState } from "react";
import Image1 from "../../public/37421224_2207.i305.010.S.m005.c13.realistic psyllium horizontal poster ad.jpg";
import Image2 from "../../public/71533270_2623.jpg";
import Image3 from "../../public/slider1.jpg";

export const homeBannerConfig = {
  interval: 3000,
  images: [Image1, Image2, Image3],
};

const ImageSlider = () => {
  const { images, interval } = homeBannerConfig;
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="relative w-full overflow-hidden mt-2">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            className="w-full h-[400px] flex-shrink-0 object-cover"
            alt={`slide-${index}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
