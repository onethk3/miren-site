import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Campaign from '@/components/Campaign';
import Philosophy from '@/components/Philosophy';
import About from '@/components/About';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col">
        <Hero />
        <Campaign />
        <Philosophy />
        <About />
      </main>
      <Footer />
    </>
  );
}
