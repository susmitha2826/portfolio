import { useEffect } from 'react';

const AnimateOnScroll = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    // Cleanup on unmount
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return null; // This component only sets up animation, nothing visible
};

export default AnimateOnScroll;
