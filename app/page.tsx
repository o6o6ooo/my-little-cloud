import NavBar from '@/components/NavBar';
import Header from '@/components/Header';
import Workflow from '@/components/Workflow';
import Works from '@/components/Works';
import Message from '@/components/Message';
import Skills from '@/components/Skills';
import Faq from '@/components/Faq';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <Header />
        <section id="works">
          <Works />
        </section>
        <Message />
        <Workflow />
        <Skills />  
        <Faq />
        <section id="contact">
          <Contact />
        </section>
        <Footer />
      {/* …rest of page… */}
      </main>
    </>
    
  );
}