import NavBar from '@/components/NavBar';
import Header from '@/components/Header';
import Workflow from '@/components/Workflow';

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <Header />
        <Workflow />
      {/* …rest of page… */}
      </main>
    </>
    
  );
}