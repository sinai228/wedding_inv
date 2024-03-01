import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { NavLink } from 'react-router-dom';
import { useTranslation } from "react-i18next";


const Header = () => {
  const [sticky, setSticky] = useState("");
  const { t, i18n } = useTranslation("common");

  // on render, set listener
  useEffect(() => {
    // console.log("hello");
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  const isSticky = () => {
    /* Method that will fix header after a specific scrollable */
    const scrollTop = window.scrollY + 300;
    const stickyClass = scrollTop >= 350 ? "is-sticky" : "";
    setSticky(stickyClass);
    // console.log(stickyClass);
  };

  const classes = `header-section d-none d-xl-block ${sticky}`;

  return (
    <>
      <header className={classes}>
        <header className="navbar">
          <ul>
            {/* <li><a class="active" href="#home">To Top</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#story">Our Story</a></li>
            <li><a href="#registry">Registry</a></li>
            <li><a href="#about">About</a></li>
            <li><Link activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={0}
              duration={750}> {t('menu.totop')}</Link></li>
            <li><Link activeClass="active"
              to="gallery"
              spy={true}
              smooth={true}
              offset={0}
              duration={750}  >{t('menu.gallery')}</Link></li> */}
           <li><NavLink activeClass="active"
              to="/"
              spy={true}
              smooth={true}
              offset={0}
              duration={750}>{t('menu.totop')}</NavLink></li>  
            <li><NavLink activeClass="active"
              to="/story"
              spy={true}
              smooth={true}
              offset={0}
              duration={750}>{t('menu.story')}</NavLink></li>
            {/* <li><Link activeClass="active"
              to="https://www.zola.com/wedding-registry"
              spy={true}
              smooth={true}
              offset={0}
              duration={750}>Registry</Link></li> */}
            <li><a href="https://www.amazon.com/wedding/share/youngraksinai"
              className="visited" rel="noreferrer"
              target="_blank">{t('menu.reg')}</a></li> 
            <li><NavLink activeClass="active"
              to="/todo"
              spy={true}
              smooth={true}
              offset={0}
              duration={750}>{t('menu.todo')}</NavLink></li>
          </ul>
          {/* <select>
            <option onClick={() => i18n.changeLanguage('kr')}>{t('buttons.kr')}

            </option>
            <option>
              en
            </option>
          </select> */}
          {/* <button onClick={() => i18n.changeLanguage('kr')}>{t('buttons.kr')}</button>
          <button onClick={() => i18n.changeLanguage('en')}>{t('buttons.en')}</button> */}
        </header>
        {/* <Route exact path="/" component={Home} />
        <Route path="/about" component={Story} /> */}

      </header>
    </>
  );
};

export default Header;
