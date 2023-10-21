// Components
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Skeleton from "@/components/Skeleton";

export default function Loading() {
  const rows = Array.from({ length: 8 }, (_, i) => i + 1);

  return (
    <main className="flex flex-col items-center justify-end bg-[var(--background)]">
      <Container>
        <Skeleton rows={rows} />
      </Container>
      <Footer />
    </main>
  );
}
