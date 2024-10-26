import Card from "@/components/Card";

async function Page() {
  const users = await fetch("https://jsonplaceholder.typicode.com/users").then(
    (res) => res.json()
  );

  return (
    <section>
      {users.map((user) => (
        <Card key={user.id} user={user} />
      ))}
    </section>
  );
}

export default Page;
