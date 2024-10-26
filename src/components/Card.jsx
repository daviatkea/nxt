import Link from "next/link";
import Styles from "./Card.module.css";

function Card({ user }) {
  return (
    <article className={Styles.card}>
      <Link href={`/users/${user.id}`} prefetch={true}>
        <h2>{user.name}</h2>
      </Link>
      <p>{user.email}</p>
    </article>
  );
}

export default Card;
