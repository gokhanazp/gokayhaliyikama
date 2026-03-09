// No need to import data here as components handle their own data.
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import Regions from '../components/sections/Regions';
import ProcessAndFaq from '../components/sections/ProcessAndFaq';

const Home = () => {
  return (
    <main>
      <Hero />
      <Services />
      <Regions />
      <ProcessAndFaq />
    </main>
  );
};

export default Home;
