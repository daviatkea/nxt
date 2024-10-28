import { getData } from "@/lib/supabase.js";
import ArtistCard from "@/components/ArtistCard";

async function Artists() {
  const artists = await getData("artists");
  return (
    <>
      <h1>Kunstnere</h1>
      <ul>
        {artists.map((artist) => (
          <ArtistCard key={artist.id} artist={artist} />
        ))}
      </ul>
    </>
  );
}

export default Artists;
