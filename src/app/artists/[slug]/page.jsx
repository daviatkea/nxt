import styles from "./artist.module.css";

import { getData } from "@/lib/supabase.js";
import { getDataById } from "@/lib/supabase.js";
import Image from "next/image";

export const revalidate = 3600;
export const dynamicParams = false; // or false, to 404 on unknown paths

export async function generateStaticParams() {
  const artists = await getData("artists");
  return artists.map((artist) => ({
    slug: artist.slug,
  }));
}

async function Artist({ params }) {
  const { slug } = await params;
  const [artist] = await getDataById("artists", slug);

  return (
    <div className={styles.artistLayout}>
      <Image
        width={400}
        height={400}
        src={`/imgs/${artist.image}`}
        alt="{artist.name}"
      />
      <div>
        <h1>{artist.name}</h1>
        <p>{artist.bio}</p>
        {artist.song && (
          <ul>
            {artist.songs.map((song) => (
              <li key={song}>{song}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Artist;
