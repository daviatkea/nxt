import Image from "next/image";
import styles from "./ArtistCard.module.css";

function ArtistCard({ artist }) {
  return (
    <li className={styles.artist}>
      <figure>
        <Image
          width={400}
          height={400}
          src={`/imgs/${artist.image}`}
          alt={artist.name}
        />
        {artist.featured && <p>Featured</p>}
      </figure>
      <h3>
        <a href={"/artists/" + artist.slug}>{artist.name}</a>
      </h3>
      {artist.songs &&
        artist.songs.map((song, index) => <p key={index}>{song}</p>)}
    </li>
  );
}

export default ArtistCard;
