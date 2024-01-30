import { useState } from 'react'
import styles from './card-acommodation.module.scss'
import Button from '../button'
import { 
  IconBellHotal, 
  IconCold, 
  IconCup, 
  IconFamily, 
  IconLocation, 
  IconParking, 
  IconRestaurant, 
  IconSea, 
  IconSmokeCigarette, 
  IconStar, 
  IconWifi } from '../icons'
import ImageGallery from './components/image-gallery'

const CardAcommodation = () => {

  return (
    <article className={styles.cardAcommodation} data-type='carrusel-acommodation'>
      <header className={styles.cardAcommodation__header}>
        <div className={styles.cardAcommodation__stars}>
          <IconStar size={14} color="#ffb900" />
          <IconStar size={14} color="#ffb900" />
          <IconStar size={14} color="#ffb900" />
          <IconStar size={14} color="#ffb900" />
        </div>
        <ImageGallery />
      </header>
      <div className={styles.cardAcommodation__content}>
        <h3 className={styles.cardAcommodation__title}>Azure Lofts & Pool</h3>

        <div className={styles.cardAcommodation__qualification}>
          <div className='box'>8,7</div>
          <div className={styles.cardAcommodation__qualification_text}>
            <span className='text-top'>Muy Bien</span>
            <span className='text-bottom'>Segun las 255 opiniones de los usuarios</span>
          </div>
        </div>

        <div className={styles.cardAcommodation__amenities}>
          <ul className={styles.cardAcommodation__amenities_list}>
            <li className={styles.cardAcommodation__amenities_item}><IconLocation color="var(--alternative-color)" size={16} /> 2,1 km del centro</li>
            <li className={styles.cardAcommodation__amenities_item}><IconSea color="var(--alternative-color)" size={18} /> A 350mts. de la playa</li>
            <li className={styles.cardAcommodation__amenities_item}><IconBellHotal color="var(--alternative-color)" size={17} /> Recepción 24 horas</li>
            <li className={styles.cardAcommodation__amenities_item}><IconWifi color="var(--alternative-color)" size={16} /> Servivio WIFI</li>
            <li className={styles.cardAcommodation__amenities_item}><IconCold color="var(--alternative-color)" size={16} /> Aire acondicionado</li>
            <li className={styles.cardAcommodation__amenities_item}><IconFamily color="var(--alternative-color)" size={16} /> Habitaciones familiares</li>
            <li className={styles.cardAcommodation__amenities_item}><IconParking color="var(--alternative-color)" size={16} /> Parking gratis</li>
            <li className={styles.cardAcommodation__amenities_item}><IconSmokeCigarette color="var(--alternative-color)" size={16} /> Habitaciones sin humo</li>
            <li className={styles.cardAcommodation__amenities_item}><IconCup color="var(--alternative-color)" size={16} /> Desayuno incluido</li>
            <li className={styles.cardAcommodation__amenities_item}><IconRestaurant color="var(--alternative-color)" size={18} /> Restaurante</li>
          </ul>
        </div>
      </div>
      <footer className={styles.cardAcommodation__footer}>
        <Button color="primary" size="medium" icon='/icons/arrow-right.svg' text="Revisar Alojamiento" />
      </footer>
    </article>
  )
}

export default CardAcommodation