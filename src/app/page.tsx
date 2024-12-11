
import TopHeader from "./Components/Header";
import { Header } from "./Components/Header";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import Category from "./Components/Category";
import Music from "./Components/Music";
import NewArrival from "./Components/NewArrival";
import Products from "./Components/Products";
import Delivery from "./Components/Delivery";
import Todayflash from './Components/Todayflash'
import ExploreProduct from "./Components/ExploreProduct";


export default function Home() {
  return (
    
    <div>
      <TopHeader/>

      <Header/>
      <Hero/>
      <Todayflash/>
<Category/>

<Products/>
      
<Music/>
      <ExploreProduct/>
      <NewArrival/>
      <Delivery/>
      <Footer/>
    
    </div>
       
    
        
    
  );
}
