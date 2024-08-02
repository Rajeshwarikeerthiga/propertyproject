// components/Footer.tsx
import Link from 'next/link';
import styles from './footer.module.css';
import Image from 'next/image';
import ColoredHeader from './ColorHeader';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
      <div className={styles.section}>
       
            <div>
       <h4><ColoredHeader/></h4>
          <br/>
           <p>Lorel impsum is a dummy text for printing and typesetting industry</p></div>
           <div className={styles.socialMedia}>
        <Link href="#" className={styles.icon7}><img src="/Assets/icons8-facebook-32.png" alt="Facebook" /></Link>
        <Link href="#" className={styles.icon7}><img src="/Assets/icons8-twitter-32.png" alt="Twitter" /></Link>
        <Link href="#" className={styles.icon7}><img src="/Assets/icons8-linked-in-32.png" alt="LinkedIn" /></Link>
        <Link href="#" className={styles.icon7}><img src="/Assets/icons8-youtube-32.png" alt="YouTube" /></Link>
      </div>
      <div className={styles.mobile} >
        <h3>DOWNLOAD OUR <br/> MOBILE APP </h3>
      </div>
           <div className={styles.appLinks}>
        <a href="#"><img src="/Assets/Group 64.jpg" alt="App Store" /></a>
        <a href="#"><img src="/Assets/Group 58.jpg" alt="Google Play" /></a>
        </div>
     
        </div>
        <div className={styles.section}>
          <h4 className='headin'> Company</h4>
          <ul className='iconfix'>
            <li><Link href="/why-rpo" className={styles.icon7}>Why RPO</Link></li>
            <li><Link href="/about-us" className={styles.icon7}>About Us</Link></li>
            <li><Link href="/faqs" className={styles.icon7}>FAQs</Link></li>
            <li><Link href="/contact-us"className={styles.icon7}>Contact Us</Link></li>
            <li><Link href="/career" className={styles.icon7}>Career</Link></li>
          </ul>
        </div>
        <div className={styles.section}>
          <h4 className='headin'>Properties</h4>
          <ul>
            <li><Link href="/property-for-sale-in-abu-dhabi" className={styles.icon7}>Property for Sale in Abu Dhabi</Link></li>
            <li><Link href="/property-for-sale-in-silicon-oasis" className={styles.icon7}>Property for Sale in Silicon Oasis</Link></li>
            <li><Link href="/property-for-sale-in-al-barsha" className={styles.icon7}>Property for Sale in AL Barsha</Link></li>
            <li><Link href="/property-for-sale-in-ranches"className={styles.icon7}>Property for Sale in Ranches</Link></li>
            <li><Link href="/property-for-sale-in-ranches"className={styles.icon7}>Property for Sale in Ranches</Link></li>
            <li><Link href="/property-for-sale-in-ranches"className={styles.icon7}>Property for Sale in Ranches</Link></li>
            <li><Link href="/property-for-sale-in-ranches"className={styles.icon7}>Property for Sale in Ranches</Link></li>
          </ul>
        </div>
        <div className={styles.section}>
          <h4 className='headin'>New Projects</h4>
          <ul>
            <li><Link href="/new-projects-in-abu-dhabi"className={styles.icon7}>New Projects in Abu Dhabi</Link></li>
            <li><Link href="/new-projects-in-silicon-oasis"className={styles.icon7}>New Projects in Silicon Oasis</Link></li>
            <li><Link href="/new-projects-in-al-barsha"className={styles.icon7}>New Projects in AL Barsha</Link></li>
            <li><Link href="/new-projects-in-ranches"className={styles.icon7}>New Projects in Ranches</Link></li>
            <li><Link href="/new-projects-in-ranches"className={styles.icon7}>New Projects in Ranches</Link></li>
            <li><Link href="/new-projects-in-ranches"className={styles.icon7}>New Projects in Ranches</Link></li>
            <li><Link href="/new-projects-in-ranches"className={styles.icon7}>New Projects in Ranches</Link></li>
          </ul>
        </div>
        <div className={styles.section}>
          <h4 className='headin'>Others</h4>
          <ul>
            <li><Link href="/property-for-sale-in-uae"className={styles.icon7}>Property for sale in UAE</Link></li>
            <li><Link href="/commercial-properties-for-sale-in-uae"className={styles.icon7}>Commercial properties for sale in UAE</Link></li>
            <li><Link href="/dubai-properties"className={styles.icon7}>Dubai Properties</Link></li>
            <li><Link href="/villa-for-sale-in-dubai"className={styles.icon7}>Villa for Sale in Dubai</Link></li>
            <li><Link href="/house-for-sale-in-dubai"className={styles.icon7}>House for sale in Dubai</Link></li>
            <li><Link href="/2-bedroom-apartment-for-sale-in-dubai"className={styles.icon7}>2 bedroom apartment for sale in Dubai</Link></li>
            <li><Link href="/apartments-for-sale-in-dubai"className={styles.icon7}>Apartments for Sale in Dubai</Link></li>
            <li><Link href="/villas-for-sale-in-dubai"className={styles.icon7}>Villas for Sale in Dubai</Link></li>
          </ul>
        </div>
      </div>
    
    </footer>
  );
}

export default Footer;
