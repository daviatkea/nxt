import Link from "next/link";

export const revalidate = 60;

export const dynamicParams = false;

export async function generateStaticParams() {
  const users = await fetch("https://jsonplaceholder.typicode.com/users").then(
    (res) => res.json()
  );
  return users.map((user) => ({
    id: String(user.id),
  }));
}

async function page({ params }) {
  const { id } = await params;
  const user = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  ).then((res) => res.json());
  return (
    <>
      <Link href="/users" prefetch={true}>
        Back
      </Link>
      <section>
        <h2>{user.name}</h2>
      </section>
    </>
  );
}

export default page;
