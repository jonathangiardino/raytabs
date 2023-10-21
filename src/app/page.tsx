// Lib
import getUsers from "@/lib/getUsers";

// Components
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Tabs from "@/components/Tabs";

export default async function Home() {
  const { users } = await getUsers();

  return (
    <main className="flex flex-col items-center justify-end bg-[var(--background)]">
      <Container>
        <Tabs users={users} />
      </Container>
      <Footer />
    </main>
  );
}
