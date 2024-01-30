"use client"
import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './navbar.module.scss'
import { IconClose, IconMenu } from '../icons/index'
import { NAVIGATION_LINKS } from '@/constants'
import Button from '../button'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<Boolean>(false)
  const [prevScrollPos, setPrevScrollPos] = useState<number>(0);
  const [userScrollPos, setUserScrollPos] = useState<string>('');
  const navbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (prevScrollPos > currentScrollPos) {
        setUserScrollPos(currentScrollPos === 0 ? '' : 'up');
      } else {
        setUserScrollPos('down');
      }
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);


  return (
    <nav 
      ref={navbarRef} 
      className={`${styles.navbar} ${userScrollPos} `}>
      <div className={`${styles.navbar__container} container`}>
        <div className={styles.navbar__logo}>
          <Link href="/">
            <Image
              src="/logo.png"
              alt="logo"
              width={100}
              height={32}
              priority
            />
            <span className={styles.navbar__logo_text}>
              <span>Reservas</span> San Andres
            </span>
          </Link>
        </div>
        <ul className={`${styles.navbar__ul} ${isMenuOpen ? styles.navbar__ul_mobile : ''}`}>
          {
            NAVIGATION_LINKS.map((link) => (
              <li key={link.key} className={styles.navbar__li}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))
          }           
          <li className={styles.navbar__button}>
            <Button color="dark" text="Login" icon={'/person.svg'} />
          </li>
        </ul>
        <div 
          className={styles.navbar__menu_icon} 
          onClick={() => setIsMenuOpen(!isMenuOpen)}>
            { isMenuOpen ? <IconClose size={20} /> : <IconMenu size={24} /> }
        </div>
      </div>
    </nav>
  )
}

export default Navbar