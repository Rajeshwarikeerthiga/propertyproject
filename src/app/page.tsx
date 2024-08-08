import React from 'react';
import SlugPage from './DetailProperty/[slug]/page'; 

const MainPage: React.FC<{ params: { slug: string } }> = ({ params }) => {
  return (
    <main>
      <SlugPage params={params} />
    </main>
  );
};

export default MainPage;
