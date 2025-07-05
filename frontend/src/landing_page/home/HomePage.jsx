import Hero from "./Hero";
import OpenAccount from "../OpenAccount";
import Trust from "./Trust";
import Pricing from "./Pricing";
import Market from "./Market";

export default function HomePage() {
  
  return (
    <div> 
      <Hero />
      <Trust />
      <Pricing />
      <Market />
      <OpenAccount />
    </div>
  );
}
