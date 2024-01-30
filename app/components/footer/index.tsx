import Link from 'next/link'
import styles from './footer.module.scss'
import Image from 'next/image'
import { IconFacebook, IconInstagram, IconX } from '../icons'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className='container'>
        <div className={styles.footer__logo}>
          <Link href="/">
            <Image
              src="/logo.png"
              alt="logo"
              width={100}
              height={32}
              priority
            />
            <span className={styles.footer__logo_text}>
              <span>Reservas</span> San Andres
            </span>
          </Link>
        </div>
        <div className={styles.footer__socials}>
          <IconFacebook size={21} color="var(--text-color-inverse)" />
          <IconX size={21} color="var(--text-color-inverse)" />
          <IconInstagram size={21} color="var(--text-color-inverse)" />
        </div>
        <p className={styles.footer__copyright}>
          © 2024. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}

export default Footer