import { useState, useEffect } from 'react';

const Highlights = () => {
  const images = [
    '/assets/images/dashboard.png',
    '/assets/images/Revenue data 2011.png',
    '/assets/images/Screenshot (17).png',
    '/assets/images/Screenshot (23).png',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden py-16">
      <div>
      <h1 className="text-center text-gray-900 text-3xl font-semibold my-6">HIGHLIGHTS</h1>
      </div>
      <div className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className="min-w-full h-64">
            <img
              src={image}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 transform -translate-y-1/2 left-4 bg-white bg-opacity-70 hover:bg-opacity-100 rounded-full p-2 shadow-lg">
        ◀
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 transform -translate-y-1/2 right-4 bg-white bg-opacity-70 hover:bg-opacity-100 rounded-full p-2 shadow-lg">
        ▶
      </button>

      {/* Indicator Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`w-3 h-3 rounded-full ${currentIndex === idx ? 'bg-blue-500' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Highlights;
