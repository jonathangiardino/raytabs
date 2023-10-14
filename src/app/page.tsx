import clsx from "clsx";

// Components
import Box from "@/components/Box";
import Footer from "@/components/Footer";
import Tabs from "@/components/Tabs";

export default function Home() {
  return (
    <main
      className={clsx(
        "flex flex-col items-center justify-end",
        "bg-[var(--background)]"
      )}
    >
      <Box>
        <Tabs />
      </Box>
      <Footer />
    </main>
  );
}
