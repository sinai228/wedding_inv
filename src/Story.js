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
import main from './assets/main.png';
import { useTranslation } from "react-i18next";
import Fade from 'react-reveal/Fade';

import './Story.css';


function Story() {

  const [sticky, setSticky] = useState("");

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
          <ul>
            <li><NavLink activeClass="active"
              to="/" >{t('menu.totop')}</NavLink></li>
            <li><NavLink activeClass="active"
              to="/story" >{t('menu.story')}</NavLink></li>
            <li><a href="https://www.zola.com/wedding-registry"
              rel="noreferrer" className="visited" target="_blank">{t('menu.reg')}</a></li>
            <li><NavLink activeClass="active"
              to="/story" >{t('menu.todo')}</NavLink></li>
            {/* Simple locale switcher */}
            {/* <button onClick={() => i18n.changeLanguage("en-US")}>
              ENG
        </button>
            <button onClick={() => i18n.changeLanguage("kr-KR")}>
              KOR
        </button> */}

            <select name="lang" id="lang">
              <option value="en-US">{t('buttons.en')}</option>
              <option value="kr">{t('buttons.kr')}</option>
            </select>

          </ul>
        </header>
      </header>
      <Fade bottom delay={1000}>

        <div className="body">
          <div id="home" className="border" style={{
            backgroundImage: `url(${main})`, height: '400px'
          }}>
          </div>

          <p>{t('story.t1')}</p>
          <div className="side">
            <div className="half">
              <span className="youngrak">{t('story.he')}: </span>
              {t('story.h1')}</div>
            <div className="half">
              <span className="sinai">{t('story.she')}: </span>
              {t('story.s1')}
            </div>
          </div>
          <div>
            <p>{t('story.t2')}</p>
          </div>
          <Timeline position="alternate" >
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot variant="outlined" color="primary" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <div>08.2021</div>
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
                <TimelineDot variant="outlined" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>11.6.21
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
              <TimelineContent>12.17.21
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
              <TimelineContent>01.05.22  <p>{t('story.t5')}</p><div className="half">
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
              <TimelineContent>04.30.22
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
              <TimelineContent>7.4.22  <p>{t('story.t7')}</p>
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
              <TimelineContent>7-12.22 <p>{t('story.t8')}</p>
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
                <TimelineDot variant="outlined" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>12.28.22 <p>{t('story.t9')}</p>
                <div className="half">
                  <span className="youngrak">{t('story.he')}:    </span>
                  {t('story.h8')}</div>
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
              <TimelineContent>08.04.2023 <p>{t('story.t10')}</p>
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
                <TimelineDot variant="outlined" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>01.19.2023
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
              <TimelineSeparator>
                <TimelineDot variant="outlined" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>05.04.2023
             <p>{t('story.t12')}</p>
                <div className="half">
                  <span className="youngrak">{t('story.he')}: </span>
                  {t('story.h12')} </div>
                <div className="half">
                  <span className="sinai">{t('story.she')}: </span>
                  {t('story.h12')}</div>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
          <div>
            <p>start!</p>
          </div>
        </div>
      </Fade>
      <button onClick={() => i18n.changeLanguage('kr')}>{t('buttons.kr')}</button>
      <button onClick={() => i18n.changeLanguage('en')}>{t('buttons.en')}</button>
    </div >
  );
}

export default Story;
