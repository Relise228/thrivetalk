import SectionFour from '../SectionFour/SectionFour';
import SectionOne from '../SectionOne/SectionOne';
import SectionThree from '../SectionThree/SectionThree';
import SectionTwo from '../SectionTwo/SectionTwo';
import SectionFive from '../SectionFive/SectionFive';
import SectionSix from '../SectionSix/SectionSix';
import SectionSeven from '../SectionSeven/SectionSeven';
import SectionEight from '../SectionEight/SectionEight';
import Footer from '../Footer/Footer';

import './App.sass';

function App() {
  return (
    <div className='app'>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
      <SectionEight />
      <Footer />
    </div>
  );
}

export default App;
