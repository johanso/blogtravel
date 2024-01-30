import Button from '../button'
import styles from './download-app.module.scss'

const DownloadApp = () => {
  return (
    <section className={styles.downloadApp}>
      <div className='container'>
        <header className={styles.downloadApp__header}>
          <h2 className={styles.downloadApp__title}><span>Descarga</span> la app</h2>
          <p className={styles.downloadApp__text}>Descarga la app para administrar tus viajes y obtener beneficios</p>
        </header>
        <div className={styles.downloadApp__buttons}>
          <Button color="light" size="medium" text="Apple Store" icon='/icons/apple.svg' />
          <Button color="light" size="medium" text="Google Play" icon='/icons/google-play.svg' />
        </div>
      </div>
    </section>
  )
}

export default DownloadApp