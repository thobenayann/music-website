import Hero from '@/components/Hero';
import Player from '@/components/Player';
import Albums from '@/components/albums/Albums';
import Events from '@/components/events/Events';
import Blog from '@/components/blog/Blog';
import Newsletter from '@/components/Newsletter';

export default function Home() {
  return (
    <main>
      <Hero />
      <Player />
      <Events />
      <Albums />
      <Blog />
      <Newsletter />
      {/* <div className='h-[4000px]'></div> */}
    </main>
  );
}
