import { client } from "@/sanity/lib/client";
import { Post } from "../utils/interface";
import Hero from "../components/hero";
import FeaturedAcommodations from "../components/featured-accommodations";
import Features from "../components/features";
import DownloadApp from "../components/download-app";
import Footer from "../components/footer";
import PlacesCard from "../components/places-home";

async function getPosts() {
  const query = `
  *[_type == "post"] {
    title,
    slug,
    publishedAt,
    excerpt,
    tags[]-> {
      _id,
      slug,
      name
    }
  }
  `;
  const data = await client.fetch(query);
  return data;
}

export const revalidate = 60;

export default async function Home() {
  const posts: Post[] = await getPosts();
  console.log(posts, "posts");

  return (
    <>
      <Hero />
      <PlacesCard />
      <FeaturedAcommodations />
      <Features />
      <DownloadApp />
      <Footer />
    </>
  );
}
