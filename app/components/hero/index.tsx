"use client"
import styles from './hero.module.scss'
import Button from "../button";
import { IconStar } from '../icons';
import PlatformLogos from '../platform-logos';

const Hero = () => {
  return (
    <header className={styles.hero}>
      <div className="container">
        <div className={styles.hero__info}>
          <h1 className={styles.hero__title}>Descubre el Encanto <br /> de San Andrés</h1>
          <h2 className={styles.hero__subtitle}>Explora Estancias Inolvidables en los Mejores Hoteles de Nuestra Isla Caribeña. ¡Reserva Ahora y Vive el Paraíso!</h2>
        </div>
        <div className={styles.hero__button}>
          <Button color="primary" size={"large"} text="Explorar Alojamientos" icon='/icons/arrow-right.svg'/>
        </div>
        <div className={styles.hero__features}>
          <div className={styles.hero__features_stars}>
            <IconStar size={16} color="#ffb900" />
            <IconStar size={16} color="#ffb900" />
            <IconStar size={16} color="#ffb900" />
            <IconStar size={16} color="#ffb900" />
            <IconStar size={16} color="#bdbdbd" />
          </div>
          <div className={styles.hero__features_texts}>
            <p className={styles.hero__features_text}><strong>4.7</strong> Stars</p>
            <p className={styles.hero__features_text}><strong>3.91M</strong> Reviews</p>
            <p className={styles.hero__features_text}><strong>500M+</strong> Downloads</p>
          </div>
        </div>
        
        <div className={styles.hero__iconscroll}></div>
      </div>
      <PlatformLogos />
    </header>
  )
}

export default Hero