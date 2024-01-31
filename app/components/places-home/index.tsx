import Button from '../button'
import PlaceCard from './components/place-card'
import PlaceInfo from './components/place-info'
import styles from './places-home.module.scss'

const PlacesCard = async () => {
  
  return (
    <section className={`${styles.placescard} container`}>
      <div className={`${styles.placescard__header}`}>
        <h2 className="section-title"><strong>Vive</strong> San Andrés</h2>
      </div>
      <div className={styles.placescard__container}>
        <PlaceCard 
          image="/hero-1.jpg"
          title={"post.title"}
          description={"post.excerpt"}
          slug={"post.slug.current"}
        />
        <PlaceCard 
          image="/hero-1.jpg"
          title={"post.title"}
          description={"post.excerpt"}
          slug={"post.slug.current"}
        />
        <PlaceCard 
          image="/hero-1.jpg"
          title={"post.title"}
          description={"post.excerpt"}
          slug={"post.slug.current"}
        />
        <PlaceCard 
          image="/hero-1.jpg"
          title={"post.title"}
          description={"post.excerpt"}
          slug={"post.slug.current"}
        />
        <PlaceCard 
          image="/hero-1.jpg"
          title={"post.title"}
          description={"post.excerpt"}
          slug={"post.slug.current"}
        />
        <PlaceCard 
          image="/hero-1.jpg"
          title={"post.title"}
          description={"post.excerpt"}
          slug={"post.slug.current"}
        />
      </div>
      <PlaceInfo />
    </section>
  )
}

export default PlacesCard