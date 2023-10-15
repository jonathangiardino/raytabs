// Lib
import getUsers from "@/lib/getUsers";

// Components
import Box from "@/components/Box";
import Footer from "@/components/Footer";
import Tabs from "@/components/Tabs";

export default async function Home() {
  const { users } = await getUsers();

  return (
    <main className="flex flex-col items-center justify-end bg-[var(--background)]">
      <Box>
        <Tabs users={users} />
      </Box>
      <Footer />
    </main>
  );
}
