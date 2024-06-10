import React from 'react';
import Head from 'next/head';
import Hero from '../components/Hero';
import OutfitCard from '../components/OutfitCard';

const Home: React.FC = () => {
  const outfits = [
    {
      image: '/test.png',
      title: 'Summer Casual',
      tags: ['Casual', 'Summer', 'Light'],
    },
    {
      image: '/test.png',
      title: 'Business Formal',
      tags: ['Formal', 'Business', 'Classic'],
    },
    {
      image: '/test.png',
      title: 'Winter Warmth',
      tags: ['Casual', 'Winter', 'Cozy'],
    },
    {
      image: '/test.png',
      title: 'Street Style',
      tags: ['Urban', 'Street', 'Trendy'],
    },
  ];

  return (
    <div>
      <Head>
        <title>Men's Style Blog</title>
        <meta name="description" content="Curated men's outfit styles" />
      </Head>
      <Hero />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mt-4 mb-4">Discover Styles</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {outfits.map((outfit, index) => (
            <OutfitCard key={index} image={outfit.image} title={outfit.title} tags={outfit.tags} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
