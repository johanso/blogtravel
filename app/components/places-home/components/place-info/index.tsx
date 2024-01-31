import { IconQuote } from '@/app/components/icons'
import styles from './place-info.module.scss'

const PlaceInfo = () => {
  return (
    <div className={styles.placeinfo}>
      <h2 className={styles.placeinfo__title}>
        <strong>Hola!</strong> ¿Listo para descubrir la magia de San Andrés?
      </h2>
      <p className={styles.placeinfo__description}>
      En nuestro rincón de maravillas, cada paso es una nueva aventura y cada rincón guarda un tesoro por descubrir. ¡Déjanos ser tu guía en esta emocionante travesía por la belleza de San Andrés!
      </p>
      <p className={styles.placeinfo__icon}>
        <IconQuote size={180} color="var(--text-color-inverse)" />
      </p>
    </div>
  )
}

export default PlaceInfo