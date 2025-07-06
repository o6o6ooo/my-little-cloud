import NavBar from '@/components/NavBar';
import Header from '@/components/Header';
import Workflow from '@/components/Workflow';
import Works from '@/components/Works';
import Message from '@/components/Message';

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <Header />
        <Workflow />
        <Works />
        <Message />        
      {/* …rest of page… */}
      </main>
    </>
    
  );
}