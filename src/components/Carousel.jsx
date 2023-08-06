import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const moveToNext = () => {
    setCurrentIndex((i) => {
      return i + 1 == images.length ? 0 : i + 1;
    });
  };

  const setIndexOnDotClick = (i) => {
    setCurrentIndex(i);
  };

  return (
    <div className="imageCarousel">
      <img
        key={currentIndex}
        src={`./src/img/projectImages/${images[currentIndex]}`}
        onClick={moveToNext}
      />
      <div className="dots">
        {images.map((image, i) => {
          return (
            <div
              key={i}
              className={`dot ${currentIndex == i ? "active" : ""}`}
              onClick={() => setIndexOnDotClick(i)}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
