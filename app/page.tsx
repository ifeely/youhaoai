import { Footer } from '~/components/footer';
import { Header } from '~/components/header';
import { Hero } from '~/components/hero';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}
