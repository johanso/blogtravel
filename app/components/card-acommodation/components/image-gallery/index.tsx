import Image from "next/image"
import styles from './image-gallery.module.scss'
import useCarrousel from "@/hooks/useCarrousel";
import { IconChevronLeft, IconChevronRight } from "@/app/components/icons";

const ImageGallery = () => {
  const { configCarrousel, containerCarrousel, onHandleRightOrLeftScroll } = useCarrousel('gallery-acommodation');

  return (
    <>
      {
        configCarrousel.left &&
        <button className={`${styles.button} ${styles.button_left}`} onClick={() => onHandleRightOrLeftScroll('left')} aria-hidden="true">
          <IconChevronLeft color='var(--text-color)' size={24} />
        </button>
      }
      {
        configCarrousel.right &&
        <button className={`${styles.button} ${styles.button_right}`} onClick={() => onHandleRightOrLeftScroll('right')} aria-hidden="true">
          <IconChevronRight color='var(--text-color)' size={24} />
        </button>
      }
      <div ref={containerCarrousel}  className={styles.imageGallery}>
        <Image data-type="gallery-acommodation" src="/hero-1.jpg" alt="hero" width={200} height={250} />
        <Image data-type="gallery-acommodation" src="/hero-2.jpg" alt="hero" width={200} height={250} />
        <Image data-type="gallery-acommodation" src="/hero-1.jpg" alt="hero" width={200} height={250} />
        <Image data-type="gallery-acommodation" src="/hero-1.jpg" alt="hero" width={200} height={250} />
        <Image data-type="gallery-acommodation" src="/hero-1.jpg" alt="hero" width={200} height={250} />
        <Image data-type="gallery-acommodation" src="/hero-1.jpg" alt="hero" width={200} height={250} />
      </div>
    </>
  )
}

export default ImageGallery