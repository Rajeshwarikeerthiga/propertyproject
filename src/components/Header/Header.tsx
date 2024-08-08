import React from 'react';
import styles from './header.module.css';
import Image from 'next/image';
import LanguageIcon from '@mui/icons-material/Language';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';

const Header: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLeft}>
        <Image src="/Assets/logo.jpg" alt="logo" width={112} height={61} className={styles.logo} />
        <div className={styles.menu}>
          <div className={styles.menuItem}>Home</div>
          <div className={styles.dropdown}>
            <button className={styles.dropbtn}>Buy <ExpandMoreOutlinedIcon className={styles.icon} /></button>
            <div className={styles.dropdownContent}>
              <a href="#">Option 1</a>
              <a href="#">Option 2</a>
            </div>
          </div>
          <div className={styles.dropdown}>
            <button className={styles.dropbtn}>Property Service <ExpandMoreOutlinedIcon className={`${styles.icon} ${styles.dropdownSymbol}`} /></button>
            <div className={styles.dropdownContent}>
              <a href="#">Option 1</a>
              <a href="#">Option 2</a>
            </div>
          </div>
          <div className={styles.menuItem}>Saved Properties</div>
        </div>
      </div>
      <div className={styles.navbarRight}>
        <div className={styles.dropdown}>
          <button className={styles.dropbtn}><LanguageIcon className={styles.icon} /> English <ExpandMoreOutlinedIcon className={`${styles.icon} ${styles.dropdownSymbol}`} /></button>
          <div className={styles.dropdownContent}>
            <a href="#">English</a>
            <a href="#">Other</a>
          </div>
        </div>
        <div className={styles.phoneIcon}><PhoneIphoneIcon className={styles.icon} /> Download App</div>
        <div className={styles.menuIcon}><MenuOpenIcon className={styles.icon} /><Image src="/Assets/person.jpg" alt="person" width={30} height={30} className={styles.personImage} /></div>
      </div>
    </nav>
  );
};

export default Header;
