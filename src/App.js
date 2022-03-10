//import './App.css';
/*import Header from './Components/Header';
import SlideImage from './Components/SlideImage';
import Section from './Components/Sections/Section';
import BoxContent from './Components/Sections/BoxContent';
import BusinessWork from './Components/Sections/BusinessWork';
import JoinUs from '../src/images/Joinus.png';
import FillInventory from '../src/images/Fill-Inventory.png';
import Order from '../src/images/GEt-orders.png';
import Directshipping from '../src/images/Direct-shipping.png';
import Started from './Components/Sections/Started';
import Benefits from './Components/Sections/Benefits';
import Video from './Components/Sections/Video';
import Dropship from './Components/Sections/Dropship';
import Integration from './Components/Sections/Integration';
import Vcrow from './Components/Footer/Vcrow';
import Footer from './Components/Footer';*/
import Catalog from "./Catalog/Catalog";



function App() {
  return (
    /*<div className="App">
   <Header/>
   <SlideImage />
   <Section />
   <section className='box-container'>
   <BoxContent source="https://www.365dropship.com/wp-content/uploads/2020/06/combined-shape-1.svg"
   number="70" text="Unique Suppliers" />

    <BoxContent source="https://www.365dropship.com/wp-content/uploads/2020/06/combined-shape.svg"
   number="200,000" text="Products" />

<BoxContent source="https://www.365dropship.com/wp-content/uploads/2020/06/combined-shape-2.svg"
   number="150" text="Destinations" />
    </section>
  
    <section className='business-work'>
         <h1>HOW THE DROPSHIP BUSINESS WORKS?</h1>
        <p>Browse and select from our catalog. More than thousands of Dropship products available on various niches.</p>
        <p>365<span>DROPSHIP</span> product catalog covers an extensive selection from some of the world’s best sellers</p>
        <div className='business-container'>
        <BusinessWork image={JoinUs} title="JOIN US" text="Register to 365" span="DROPSHIP" />
        <BusinessWork image={FillInventory} title="FILL YOUR STORE INVENTORY" text="Choose, manage and sync products from the catalog directly to your online store" />
        <BusinessWork image={Order} title="GET ORDERS" text="Choose manual or automatic synchronize between your online store orders and your shopping cart" />
        <BusinessWork image={Directshipping} title="DIRECT SHIPPING" text="We will automatically ship your orders directly to your customer" />
        </div>
        
    </section>

    <Started/>
    <Benefits/>
    <Video/>
    <Dropship/>
    <Integration/>
    <Vcrow/>
    <Footer/>
    </div>*/
    <div>
      <Catalog />
    </div>
  );
}

export default App;
