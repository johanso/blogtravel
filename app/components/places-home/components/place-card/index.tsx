"use client"
import Link from 'next/link'
import { IconLocation } from '../../../icons'
import styles from './places-card.module.scss'
import Image from 'next/image'
import Button from '@/app/components/button'

interface PlaceCardProps {
  image: string
  title: string
  description: string
  slug?: string
}

const PlaceCard: React.FC<PlaceCardProps> = ({image, title, slug}) => {

const description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.".slice(0, 120)

  return (
    <article data-type='carrusel-place' className={styles.placecard}>
      <Image src={image} alt={title} width={500} height={500} />

      <div className={styles.placecard__body}>
        <Link href={`/lugares/${slug}`}>
          <h2 className={styles.placecard__title}>Tips for renting a car in Namibia</h2>
        </Link>
        <div className={styles.placecard__button}>
          <Button color="light" size="medium" text="Ver artículo" icon='/icons/arrow-right.svg'/>
        </div>
      </div>
    </article>
  )
}

export default PlaceCard
