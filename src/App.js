import './App.css';
import Footer from './cmponents/Footer/Footer';
import Hero from './cmponents/Hero/Hero';
import Join1 from './cmponents/Join1/Join1';
import Plans from './cmponents/Plans/Plans';
import Programs from './cmponents/Programs/Programs';
import Reasons from './cmponents/Reasons/Reasons'
import Testimonials from './cmponents/Testimonials/Testimonials';

function App() {
  return (
    <div className="App">
       <Hero/>
       <Programs/>
       <Reasons/>
       <Plans/>
       <Testimonials/>
       <Join1/>
       <Footer/>
    </div>
  );
}
export default App;


