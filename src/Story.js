// import Fade from 'react-reveal/Fade';
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
// import { Link } from "react-scroll";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import LanguageIcon from '@mui/icons-material/Language';
import main from './assets/story.JPG';
import last from './assets/laststory.JPG';
import { useTranslation } from "react-i18next";
import Fade from 'react-reveal/Fade';
import './Story.css';
import Navbar from './components/Header2.js';


function Story() {
  const [sticky, setSticky] = useState("");
  const [showButton, setShowButton] = useState(true);

  const toggleButton = () => {
    setShowButton(!showButton);
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
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
  const { t, i18n } = useTranslation("common");

  return (
    <div className="Story" >
      <header className={classes}>
        <header className="navbar"> 
        <Navbar></Navbar> 
        </header>
      </header>
      <div className="lang">
        {!showButton && <button onClick={() => { i18n.changeLanguage('kr'); toggleButton(); }}>
          <LanguageIcon color="primary" fontSize="small"  ></LanguageIcon>
        </button>}
        {showButton && <button onClick={() => { i18n.changeLanguage('en'); toggleButton(); }}>
          <LanguageIcon fontSize="small"  ></LanguageIcon>
        </button>}
      </div>
         {/*<Fade bottom delay={1000}>*/}

        <div id="" className="body">
          <div id="home" className="middle" style={{
            backgroundImage: `url(${main})`, height: '400px'
          }}>
          </div>
          <div className="padding-10">
            <p>{t('story.t1')}</p>
            <div className="side">
              <div className="half reg">
                <span className="youngrak">{t('story.he')}: </span>
                {t('story.h1')}</div>
              <div className="half reg">
                <span className="sinai">{t('story.she')}: </span>
                {t('story.s1')}
              </div>
            </div>
          </div>

          <div>
            <p>{t('menu.story')}</p>
          </div>
          <Timeline position="alternate" >
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot variant="outlined" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>  <p> 08.2021</p>
                <p>{t('story.t2')}</p>
                <div className="half">
                  <span className="youngrak">{t('story.he')}: </span>
                  {t('story.h2')}</div>
                <div className="half">
                  <span className="sinai">{t('story.she')}: </span>
                  {t('story.s2')}
                </div>
              </TimelineContent>

            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent className="nohover"> <p> 11.6.21</p>
             <p>{t('story.t3')}</p>
                <div className="half">
                  <span className="youngrak">{t('story.he')}: </span>
                  {t('story.h3')}</div>
                <div className="half">
                  <span className="sinai">{t('story.she')}: </span>
                  {t('story.s3')}

                </div>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot variant="outlined" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent><p>12.17.21 </p>
             <p>{t('story.t4')}</p>
                <div className="half">
                  <span className="youngrak">{t('story.he')}: </span>
                  {t('story.h4')}</div>
                <div className="half">
                  <span className="sinai">{t('story.she')}: </span>
                  {t('story.s4')}
                </div>
              </TimelineContent>

            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent><p>01.05.22  </p> <p>{t('story.t5')}</p><div className="half">
                <span className="youngrak">{t('story.he')}: </span>
                {t('story.h5')}</div>
                <div className="half">
                  <span className="sinai">{t('story.she')}: </span>
                  {t('story.s5')}
                </div></TimelineContent>

            </TimelineItem>

            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot variant="outlined" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent> <p>04.30.22</p>
            <p>{t('story.t6')}</p>
                <div className="half">
                  <span className="youngrak">{t('story.he')}: </span>
                  {t('story.h6')}</div>
                <div className="half">
                  <span className="sinai">{t('story.she')}: </span>
                  {t('story.s6')}
                </div>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent> <p>07.04.22</p>  <p>{t('story.t7')}</p>
                <p></p>
                <div className="half">
                  <span className="youngrak">{t('story.he')}: </span>
                  {t('story.h7')}</div>
                <div className="half">
                  <span className="sinai">{t('story.she')}: </span>
                  {t('story.s7')}
                </div>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot variant="outlined" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent><p>07.12.22</p> <p>{t('story.t8')}</p>
                <div className="half">
                  <span className="youngrak">{t('story.he')}:
                  </span> {t('story.h8')}</div>
                <div className="half">
                  <span className="sinai">{t('story.she')}: </span>
                  {t('story.s8')}
                </div>

              </TimelineContent>

            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent><p>12.28.22</p> <p>{t('story.t9')}</p>
                <div className="half">
                  <span className="youngrak">{t('story.he')}:    </span>
                  {t('story.h9')}</div>
                <div className="half">
                  <span className="sinai">{t('story.she')}: </span>
                  {t('story.s9')}
                </div>

              </TimelineContent>

            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot variant="outlined" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent><p>08.04.2023</p> <p>{t('story.t10')}</p>
                <div className="half">
                  <span className="youngrak">{t('story.he')}: </span>
                  {t('story.h10')}</div>
                <div className="half">
                  <span className="sinai">{t('story.she')}: </span>
                  {t('story.s10')}
                </div>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent><p> 03~12.2023</p>
             <p>{t('story.t11')}</p>
                <div className="half">
                  <span className="youngrak">{t('story.he')}: </span>
                  {t('story.h11')}</div>
                <div className="half">
                  <span className="sinai">{t('story.she')}: </span>
                  {t('story.s11')}
                </div>

              </TimelineContent>

            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent color="text.secondary">
                {/* 09:30 am */}
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot variant="outlined" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent><p>01.19.2024</p>
             <p>{t('story.t12')}</p>
                <div className="half">
                  <span className="youngrak">{t('story.he')}: </span>
                  {t('story.h12')} </div>
                <div className="half">
                  <span className="sinai">{t('story.she')}: </span>
                  {t('story.s12')}</div>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent color="text.secondary">
                <img className="image" src={last} alt="main"></img>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent><p>05.04.2024</p>
             <p>{t('story.t13')}</p>
                <div className="half">
                  <span className="youngrak">{t('story.he')}: </span>
                  {t('story.h13')} </div>
                <div className="half">
                  <span className="sinai">{t('story.she')}: </span>
                  {t('story.s13')}</div>
              </TimelineContent>
            </TimelineItem>
          </Timeline>

        </div>
{/*</Fade>*/}
      {/* <button onClick={() => i18n.changeLanguage('kr')}>{t('buttons.kr')}</button>
      <button onClick={() => i18n.changeLanguage('en')}>{t('buttons.en')}</button> */}
      <button onClick={() => handleScrollToTop()}>{t('buttons.totop')}</button>
      <footer>
        <p> Copyright © 2024 Sinai Youngrak. All Rights Reserved</p>
      </footer>

    </div >
  );
}

export default Story;
