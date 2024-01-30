"use client"
import useCarrousel from '@/hooks/useCarrousel';
import CardAcommodation from '../card-acommodation'
import styles from './featured-accommodations.module.scss'
import { IconArrowLeft, IconArrowRight } from '../icons';

const FeaturedAcommodations = () => {

  const { configCarrousel, containerCarrousel, onHandleRightOrLeftScroll } = useCarrousel('carrusel-acommodation');

  return (
    <section className={styles.featuredAcommodations}>
      <div className={`${styles.featuredAcommodations__header} container`}>
        <h2 className="section-title"><strong>Explora </strong> los Mejores Hospedajes</h2>
        <div className='featuredAcommodations-buttons'>
          <button className='button' onClick={() => onHandleRightOrLeftScroll('left')} aria-hidden="true">
            <IconArrowLeft color={configCarrousel.left ? 'var(--text-color)' : 'var(--text-disabled)'} size={18} />
          </button>
          <button className='button' onClick={() => onHandleRightOrLeftScroll('right')} aria-hidden="true">
            <IconArrowRight color={configCarrousel.right ? 'var(--text-color)' : 'var(--text-disabled)'} size={18} />
          </button>
        </div>
      </div>

      <div ref={containerCarrousel} className={styles.featuredAcommodations__container} >
        <CardAcommodation />
        <CardAcommodation />
        <CardAcommodation />
        <CardAcommodation />
        <CardAcommodation />
        <CardAcommodation />
        <CardAcommodation />
        <CardAcommodation />
        <CardAcommodation />
        <CardAcommodation />
        <CardAcommodation />
      </div>
    </section>
  )
}

export default FeaturedAcommodations