import './App.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import About from '../components/About/About';
import Tokenomics from '../components/Tokenomics/Tokenomics';
import HowToBuy from '../components/HowToBuy/HowToBuy';
import Art from '../components/Art/Art';
import titleImg from './assets/titleImg.png';
import copyImg from './assets/copy.svg';
import tokenomicsImg from './assets/tokenomicsImg.png';
import artImg1 from './assets/artImg1.png';
import artImg2 from './assets/artImg2.png';
import artImg3 from './assets/artImg3.png';
import dolarImg1 from './assets/dolarImg1.png';
import dolarImg2 from './assets/dolarImg2.png';
import dolarImg3 from './assets/dolarImg3.png';
import dolarImg4 from './assets/dolarImg4.png';
import dolarImg5 from './assets/dolarImg5.png';
import dolarImg6 from './assets/dolarImg6.png';
import dolarImg7 from './assets/dolarImg7.png';
import dolarImg8 from './assets/dolarImg8.png';
import { useRef, useState } from 'react';
import { useEffect } from 'react';

function App() {
  const dolarImgs = [dolarImg1, dolarImg2, dolarImg3, dolarImg4, dolarImg5, dolarImg6, dolarImg7, dolarImg8];
  const [isPopupVisible, setPopupVisible] = useState(false);
  const tokenAddress = '******************';

  const aboutRef = useRef(null);
  const tokenomicsRef = useRef(null);
  const howToBuyRef = useRef(null);
  const artRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(tokenAddress).then(() => {
      setPopupVisible(true);
      setTimeout(() => {
        setPopupVisible(false);
      }, 3000);
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  };
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const minScroll = 900; // Паралакс почне працювати після прокрутки 200px
      const maxScroll = 1300; // Паралакс працюватиме до 300px після мінімального порогу
  
      // Зміщення доларів на основі прокрутки
      dolarImgs.forEach((_, index) => {
        const dolarElement = document.querySelector(`.dolar${index + 1}`);
        if (dolarElement) {
          // Якщо скрол перевищив мінімальний поріг
          if (scrollPosition > minScroll) {
            const offset = Math.min((scrollPosition - minScroll) * 0.3, (maxScroll - minScroll) * 0.2); // Обмежуємо зміщення
            dolarElement.style.transform = `translateY(${offset}px)`; // Зміщення по осі Y
          }
        }
      });
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll); // Очищення події під час відмонтування компонента
    };
  }, [dolarImgs]);




  return (
    <div className="App">
      <Header 
        scrollToAbout={() => scrollToSection(aboutRef)}
        scrollToTokenomics={() => scrollToSection(tokenomicsRef)}
        scrollToHowToBuy={() => scrollToSection(howToBuyRef)}
        scrollToArt={() => scrollToSection(artRef)}
      />
      <About ref={aboutRef} titleImg={titleImg} />
      <div className="tokenomics__wrap">
        <Tokenomics 
          ref={tokenomicsRef} 
          copyImg={copyImg} 
          tokenAddress={tokenAddress} 
          copyToClipboard={copyToClipboard}
          tokenomicsImg={tokenomicsImg} 
          isPopupVisible={isPopupVisible}
        />
      </div>
      <div className="howToBuy__wrap">
          {dolarImgs.map((img, index) => (
          <img key={index} className={`dolar${index + 1}`} src={img} alt={`Dolar ${index + 1}`} />
        ))}
        <HowToBuy 
          ref={howToBuyRef}
          // dolarImgs={[dolarImg1, dolarImg2, dolarImg3, dolarImg4, dolarImg5, dolarImg6, dolarImg7, dolarImg8]}
        />
      </div>
      <div className="links__wrap">
        <Art 
          ref={artRef}
          artImgs={[artImg1, artImg2, artImg3]} 
        />
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
