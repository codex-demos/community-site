'use client';

import LocalNews from './components/LocalNews';
import NavBar from './components/NavArea';
import Sponsors from './components/Sponsors';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <NavBar />
      <div className="d-flex flex-column">
        <Sponsors />
        <LocalNews />
      </div>
    </main>
  );
}
