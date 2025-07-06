import NavBar from '@/components/NavBar';
import Header from '@/components/Header';
import Workflow from '@/components/Workflow';
import Works from '@/components/Works';
import Message from '@/components/Message';
import Skills from '@/components/Skills';
import Faq from '@/components/Faq';

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <Header />
        <Workflow />
        <Works />
        <Message />
        <Skills />  
        <Faq />   
      {/* …rest of page… */}
      </main>
    </>
    
  );
}