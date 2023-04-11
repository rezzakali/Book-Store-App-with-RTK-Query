import React from 'react';
import Books from '../components/Books';
import Header from '../ui/Header';

function Home() {
  return (
    <main className="py-12 px-6 2xl:px-6 container">
      <div className="order-2 xl:-order-1">
        <Header />
        <Books />
      </div>
    </main>
  );
}

export default Home;
