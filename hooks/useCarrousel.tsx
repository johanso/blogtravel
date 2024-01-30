import { useRef, useState, useLayoutEffect } from 'react';

const useCarrousel = (datatype: string) => {
  const [configCarrousel, setConfigCarrousel] = useState({
    right: false,
    left: false
  });

  const containerCarrousel = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const { current: carrousel } = containerCarrousel;

    const handleScroll = () => {
      if (carrousel) {
        const right = carrousel.scrollLeft < carrousel.scrollWidth - carrousel.offsetWidth;
        const left = carrousel.scrollLeft > 0;
        setConfigCarrousel({ right, left });
      }
    };

    const handleResize = () => {
      handleScroll();
    };

    if (carrousel) {
      handleScroll();
      carrousel.addEventListener('scroll', handleScroll);
      window.addEventListener('resize', handleResize);
    }

    return () => {
      if (carrousel) {
        carrousel.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  const onHandleRightOrLeftScroll = (action: 'left' | 'right') => {
    const { current: carrousel } = containerCarrousel;

    if (carrousel) {
      const elements = Array.from(carrousel.querySelectorAll(`[data-type=${datatype}]`));

      if (elements.length >= 2) {
        const [firstElement, secondElement] = elements;

        const nextWidth = secondElement.getBoundingClientRect().left - firstElement.getBoundingClientRect().left;

        carrousel.scrollLeft += action === 'right' ? nextWidth : -nextWidth;
      }
    }
  };

  return { configCarrousel, containerCarrousel, onHandleRightOrLeftScroll };
};

export default useCarrousel;
