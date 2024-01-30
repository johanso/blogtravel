import Image from 'next/image'
import styles from './platformlogos.module.scss'
import { PLATFORM_LOGOS } from '@/constants'

const PlatformLogos = () => {
  return (
    <section className={styles.platforms}>
      <div className={styles.platforms__logos}>
        {
          PLATFORM_LOGOS.map((logo) => (
            <div key={logo.key} className={styles.platforms__logo}>
              <Image
                src={logo.src}
                alt={logo.alt}
                width={100}
                height={26}
                priority
              />
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default PlatformLogos