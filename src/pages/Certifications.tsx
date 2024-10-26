import { useState, useEffect, useRef } from 'react';
import myphoto from '../assets/images/photo2.jpg';
import myphoto2 from '../assets/images/40-alx-aice-ai-career-essentials-certificate-victor-kipkurui.png';
import myphoto3 from '../assets/images/Foundations of Cybersecurity_page-0001.jpg';
import myphoto4 from '../assets/images/hzmoNKtzvAzXsEqx8_Accenture North America_iavbesmDK4WydB283_1715163161981_completion_certificate_page-0001.jpg';
import myphoto5 from '../assets/images/FullStackOpen.png';
import myphoto6 from '../assets/images/Victor Kipkurui - Intro to Machine Learning.png';
import { FaDownload } from 'react-icons/fa6';

const Certifications = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/VICTOR KIPKURUI RESUME.pdf';
    link.setAttribute('download', 'filename.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref}>
      <div>
        <h1 className="text-center text-gray-900 text-2xl md:text-3xl lg:text-4xl font-semibold my-6">
          CERTIFICATIONS
        </h1>
      </div>
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4 sm:px-10 md:px-14 py-6 transition-transform duration-700 ease-in-out ${
          isVisible ? 'animate-slideInUp' : 'transform translate-y-10 opacity-0'
        }`}
      >
        <img className="hover:scale-110 transform transition-transform duration-300 ease-in-out" src={myphoto} alt="Certificate 1" />
        <img className="hover:scale-110 transform transition-transform duration-300 ease-in-out" src={myphoto2} alt="Certificate 2" />
        <img className="hover:scale-110 transform transition-transform duration-300 ease-in-out" src={myphoto3} alt="Certificate 3" />
        <img className="hover:scale-110 transform transition-transform duration-300 ease-in-out" src={myphoto4} alt="Certificate 4" />
        <img className="hover:scale-110 transform transition-transform duration-300 ease-in-out" src={myphoto5} alt="Certificate 5" />
        <img className="hover:scale-110 transform transition-transform duration-300 ease-in-out" src={myphoto6} alt="Certificate 6" />
      </div>
      <div>
        <div className="text-center py-6">
          <h2 className="text-center text-gray-900 text-2xl md:text-3xl font-semibold">
            Download My Resume Here
          </h2>
        </div>
        <div className="flex items-center justify-center py-6">
          <button
            className="bg-blue-700 p-3 px-5 rounded-md text-white flex items-center space-x-2 hover:bg-blue-800 hover:scale-110 transform transition-transform duration-300 ease-in-out"
            onClick={handleDownload}>
            <span>Resume</span>
            <FaDownload />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Certifications;