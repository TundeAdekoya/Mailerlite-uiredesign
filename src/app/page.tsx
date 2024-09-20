import Image from 'next/image';
import BackgroundImage from "/src/Assets/Mailerlite background.svg";
import NavBar from "./Common/Navbar";
import AboveTheFold from "./Components/Abovethefold";
import HeroSection from "./Components/Herosection";
import "/src/app/home.css";

export default function Home() {
  return (
    
    <div id="home" >
      <div className="background-div">
        <Image src={BackgroundImage} alt="Background image"   className='background-image'/>
      </div>
      <NavBar/>
      <AboveTheFold/>
      <HeroSection/>
    </div>
  );
}
