import { FEATURES_APP } from '@/constants'
import styles from './features.module.scss'
import Image from 'next/image'

const Features = () => {
  return (
    <section className={styles.features}>

      <div className='container'>
        <h2 className="section-title"><strong>Reserva</strong> con Ventajas Exclusivas</h2>

        <div className={styles.features__cards}>
          {
            FEATURES_APP.map((feature) => (
              <div key={feature.key} className={styles.features__card}>
                <div className={styles.features__card_icon}>
                  <Image src={feature.src} alt={feature.alt} height={36} width={36} />
                </div>
                <h3 className={styles.features__card_title}>{feature.title}</h3>
                <p className={styles.features__card_description}>{feature.description}</p>
              </div>
            ))
          }
          <div className={styles.features__app}>
            <Image src="/image-app.png" alt="app movil" height={600} width={400} />
          </div>
        </div>

      </div>

    </section>
  )
}

export default Features