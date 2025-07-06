import NavBar from '@/components/NavBar';
import Header from '@/components/Header';
import Workflow from '@/components/Workflow';
import Works from '@/components/Works';

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <Header />
        <Workflow />
        <Works />
      {/* …rest of page… */}
      </main>
    </>
    
  );
}