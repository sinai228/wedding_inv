import React, { useState } from "react";
// import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
// import { BrowserRouter } from 'react-router-dom';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';
import { NavLink } from 'react-router-dom';
import Accordion from '@mui/material/Accordion';
// import { Text } from 'react-native';
// import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTranslation } from "react-i18next";
import MetaTags from 'react-meta-tags';

import LanguageIcon from '@mui/icons-material/Language';

import './App.css';
import ThumbGallery from './components/Thumb.js';
import Navbar from './components/Header.js';
import Fade from 'react-reveal/Fade';
import moment from 'moment';

import main from './assets/main.png';
import ornament from './assets/bb.png';
import ornament2 from './assets/bbb.png';
import ornament3 from './assets/bb1.png';
// import calendar from './assets/calendar.png';
import calendar from './assets/date.png';
import bride from './assets/bride.JPG';
import groom from './assets/groom.jpg';
import middle from './assets/middle.jpg';




export default function App() {
  // class Wedding extends React.Component {
  // render() {
  // SwiperCore.use([Navigation, Thumbs])
  // const [thumbsSwiper, setThumbsSwiper] = useState(null);
  // const [thumbs, setThumbs] = useState(null);
  // const [lang, setLang] = useState('kr');

  // const toggle = () => setLang(lang => 'kr');

  const [showButton, setShowButton] = useState(true);

  const toggleButton = () => {
    setShowButton(!showButton);
  };
  // useEffect(() => {
  //   console.log('Do something after counter has changed', counter);
  // }, [counter]);

  // const images = [
  //   "https://swiperjs.com/demos/images/nature-10.jpg",
  //   "https://swiperjs.com/demos/images/nature-1.jpg",
  //   "https://swiperjs.com/demos/images/nature-2.jpg",
  //   "https://swiperjs.com/demos/images/nature-3.jpg",
  //   "https://swiperjs.com/demos/images/nature-4.jpg",
  //   "https://swiperjs.com/demos/images/nature-5.jpg",
  //   "https://swiperjs.com/demos/images/nature-6.jpg",
  // ];
  var start = moment().format("YYYY-MM-DD");
  var end = moment('2024-05-04');
  var diff = Math.round(moment.duration(end.diff(start)).asDays()); // 15.958333333333334;
  const { t, i18n } = useTranslation("common");

  return (
    // <BrowserRouter>
    <div className="App">
      <MetaTags>
        <meta property="og:title" content="MyApp" />
        <meta property="og:image" content="path/to/image.jpg" />
      </MetaTags>

      {/* <img className="main" src={main} alt="image" /> */}
      <div id="home" className="border" style={{
        backgroundImage: `url(${main})`, height: "700px"
      }}>
        <div className="padding-50">
          <text className="invitation">Wedding Invitation</text>
          {/* <p>  {t('name.groom')} | {t('name.bride')} </p> */}
        </div>
        <text className="thedate"> May4th</text>
      </div>
      <header className="navbar">
        <Navbar></Navbar>
      </header>
      {/*
      <div className="babysbreath">
        <img src={ornament2} alt="f0" />
      </div> */}
      <div className="lang">
        {!showButton && <button onClick={() => { i18n.changeLanguage('kr'); toggleButton(); }}>
          <LanguageIcon color="primary" fontSize="small"  ></LanguageIcon>
        </button>}
        {showButton && <button onClick={() => { i18n.changeLanguage('en'); toggleButton(); }}>
          <LanguageIcon fontSize="small"  ></LanguageIcon>
        </button>}
      </div>
      <div className="cards">
        <Card className="card"
          orientation="horizontal"
          variant="outlined"
          sx={{
            borderColor: 'lightgray',
            width: "70vw",
            backgroundColor: "white",
            marginBottom: "60px",
            marginTop: "60px",
          }}>
          <CardOverflow >
            <AspectRatio ratio="1" sx={{ width: "25vw", padding: 0.5, borderRadius: 5 }}>
              <img
                src={groom}
                loading="lazy"
                alt="p1"
              />
            </AspectRatio>
          </CardOverflow>
          <Fade bottom delay={400}>

            <CardContent>
              <div className="side">
                <Typography level="body-sm" fontSize="14px" textAlign="left" fontFamily="GowunDodum" > {t('name.groomp')} </Typography>
                <Typography level="body-sm" fontSize="11px"
                  textAlign="left"
                  fontFamily="GowunDodum"
                >  {t('name.3')} </Typography>
              </div>
              <Typography fontWeight="md" textColor="text.secondary" fontSize="19px" textAlign="left" fontFamily="GowunDodum">
                {t('name.groom')}
              </Typography>
            </CardContent>
            <CardOverflow
              variant="soft"
              color="gray"
              sx={{
                px: 0.2,
                writingMode: 'vertical-rl',
                textAlign: 'center',
                fontSize: 'xs',
                fontWeight: 'xl',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                borderLeft: '1px solid',
                borderColor: 'divider',
              }}
            >
              GROOM
              </CardOverflow>
          </Fade>
        </Card>

        <Card className="card"
          orientation="horizontal"
          variant="outlined"
          sx={{
            borderColor: 'lightgray',
            width: "70vw",
            backgroundColor: "white",
            marginBottom: "60px"
          }}>
          <CardOverflow>
            <AspectRatio ratio="1" sx={{ width: "25vw", padding: 0.5, borderRadius: 5 }}>
              <img
                src={bride}
                loading="lazy"
                alt="p2"
              />
            </AspectRatio>
          </CardOverflow>
          <Fade bottom delay={400}>
            <CardContent>

              <div className="side">
                <Typography level="body-sm" fontSize="14px" textAlign="left" fontFamily="GowunDodum" > {t('name.bridep')} </Typography>
                <Typography level="body-sm" fontSize="11px"
                  textAlign="left"
                  fontFamily="GowunDodum"
                > {t('name.2')} </Typography>
              </div>
              <Typography fontWeight="md" textColor="text.secondary" fontSize="19px" textAlign="left" fontFamily="GowunDodum">
                {t('name.bride')}
              </Typography>
            </CardContent>
            <CardOverflow
              variant="soft"
              color="white"
              sx={{
                px: 0.2,
                writingMode: 'vertical-rl',
                textAlign: 'center',
                fontSize: 'xs',
                fontWeight: 'xl',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                borderLeft: '1px solid',
                borderColor: 'divider',
              }}
            >
              BRIDE
          </CardOverflow>
          </Fade>
        </Card>
      </div>

      <div id="" className="intro">

        <div className="babysbreath">
          <img src={ornament2} alt="f1" />
        </div>
        <Fade bottom delay={400}>
          <div className="keep">
            <p className="introtext">{t('introtext.1')}</p>
            <p>{t('introtext.2')} </p>
            <p>{t('introtext.3')}</p>
            <p>{t('introtext.4')}</p>
            <p> {t('introtext.5')}</p>
          </div>
        </Fade>
        <div className="babysbreath">
          <img src={ornament2} alt="f2" />
        </div>
      </div>

      <Fade bottom delay={400}>
        <div id="home" className="middle_img" style={{
          backgroundImage: `url(${middle})`, height: '630px', flex: 1, flexDirection: 'column', alignItems: 'flex-end'
        }}>
          <div className="banner">
            <p style={{
              padding: '50px'
            }}>We're getting married!</p>
          </div>
          <div style={{
            height: '420px'
          }}>
          </div>
          <span className="white"> {t('dday')}
            <span className="Dday">{diff}</span>
            {t('dday2')}</span>
          {/* <div className="Dday-white">
            <span > {t('dday')} {diff} {t('dday2')}</span>
          </div> */}
        </div>
        <div id="home" className="pink" style={{
          backgroundColor: '#F7E4D7'
        }}>
          <br /><br />
          <text style={{ fontSize: "17px" }}> {t('date')}</text> <br />
          <text style={{ fontSize: "17px" }}>{t('time')}</text>  <br />
          <br />
          <text style={{ fontSize: "11px" }}>{t('wed')} + {t('reception')}</text>  <br /> <br />

          <text style={{ fontSize: "13px", paddingTop: "40px" }}>42693 Dequindre Rd, Troy, MI 48085</text>  <br />
          <div className="buttons">
            <button className="pinkcopy"
              onClick={() => navigator.clipboard.writeText('42693 Dequindre Rd, Troy, MI 48085')}
            >
              {t('buttons.copy')}
            </button>
            <a href="https://www.google.com/maps/place/Korean+Methodist+Church+of+Detroit/@42.60739,-83.0922078,16.52z/data=!4m6!3m5!1s0x8824c33aef8d50ad:0x9bf673bb297fd077!8m2!3d42.6050043!4d-83.0917879!16s%2Fg%2F1vm_yhqs?entry=ttu" className="visited" rel="noreferrer" target="_blank">
              <button className="pinkcopy">{t('buttons.map')}</button>
            </a>
          </div>
        </div>
        <div className="babysbreath padding-50">
          <img src={ornament2} alt="f3" />
        </div>

        {/* <div className="Dday ">
          D-{diff}
          <p>until the marriage</p>
          <p> 영락 ♥︎ 시내의 결혼식이 {diff.toString()} 일 남았습니다
          </p>
          <span> {t('dday')}</span>
          {diff}<span> {t('dday2')}</span>
        </div> */}
      </Fade>
      <Fade bottom delay={400}>
        <div
          style={{ height: "100px" }}></div>
        <div id="gallery" className="gallery ">
          {/* <div className="banner">
            <p>we're getting married</p>
          </div> */}
          <ThumbGallery />
        </div >
        {/* <div
          style={{ height: "100px" }}></div> */}
      </Fade>
      <Fade bottom delay={400}>
        <div id="story" className="story">
          <p> {t('header.story')}</p>
          <button className="readmore">  <li><NavLink activeClass="active"
            to="/story"
            spy={true}
            smooth={true}
            offset={0}
            duration={750}>{t('header.read')}</NavLink></li></button>
        </div>  </Fade>
      <Fade bottom delay={400}>
        <div id="story" className="account">
          <p className="header"> {t('header.accounts')}   </p><br />
          <p className="header">  <text>♥︎</text> </p><br />
          <div className="acc" >
            <Accordion className="accname" style={{ marginBottom: "15px", alignItems: "center", borderRadius: "15px" }}>
              <AccordionSummary
                // expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                // className="right"
                id="panel1-header"
              >
                {t('header.groom')}
              </AccordionSummary>
              <AccordionDetails>
                <div className="accdetail">
                  <span>Zelle 6163491228</span>
                  <button className="acccopy"
                    onClick={() => navigator.clipboard.writeText('6163491228')}
                  >
                    {t('buttons.cop')}
                  </button>
                </div>
                <div className="accdetail">
                  <span>국민은행 123123123</span>
                  <button className="acccopy"
                    onClick={() => navigator.clipboard.writeText('123123123')}
                  >
                    {t('buttons.cop')}
                  </button>
                </div>
              </AccordionDetails>
            </Accordion>

          </div>
          <div className="acc" >
            <Accordion className="acc" style={{ marginBottom: "15px", alignItems: "center", borderRadius: "15px" }}>
              <AccordionSummary
                // expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              // className="right"
              >
                {t('header.bride')}
              </AccordionSummary>
              <AccordionDetails>
                <div className="accdetail">
                  <span>Zelle 6163345735</span>
                  <button className="acccopy"
                    onClick={() => navigator.clipboard.writeText('6163345735')}
                  >
                    {t('buttons.cop')}
                  </button>
                </div>
                {/* <div className="accdetail">
                  <span className="accdetail">국민은행 123123123</span>
                  <button className="acccopy"
                    onClick={() => navigator.clipboard.writeText('123123123')}
                  >
                    {t('buttons.cop')}
                  </button>
                </div> */}
              </AccordionDetails>
            </Accordion>

          </div>
        </div>
      </Fade >
      <Fade bottom delay={700}>
        <div className="verse">
          <div className="babysbreath">
            <img src={ornament3} alt="f0" />
          </div >

          <div className="keep"><p>
            {t('verse.body')}
          </p><p>
              {t('verse.passage')}
            </p>
          </div>

          {/* <p>
            There is one body and one Spirit,
            just as you were called to one
            hope when you were called
        </p><p>
            Ephesians 4:4
        </p> */}
        </div>
      </Fade>

      {/* <div id="more" className="location">
        <Fade bottom delay={700}>
          <p className="header">
            {t('header.details')}</p>
           <img className="calendar" src={calendar} alt="cal" />
          <p> {t('dday')}{diff}{t('dday2')}</p>
           <div className="babysbreath">
            <img src={ornament} alt="f0" />
          </div>
          <p> {t('date')}</p>
          <br />
          <p>{t('wed')} + {t('reception')}</p>
          <p>{t('time')}</p>
          <p>42693 Dequindre Rd, Troy, MI 48085</p>
          <div className="buttons">
            <button className="copy"
              onClick={() => navigator.clipboard.writeText('42693 Dequindre Rd, Troy, MI 48085')}
            >
              {t('buttons.copy')}
            </button>
            <a href="https://www.google.com/maps/place/Korean+Methodist+Church+of+Detroit/@42.60739,-83.0922078,16.52z/data=!4m6!3m5!1s0x8824c33aef8d50ad:0x9bf673bb297fd077!8m2!3d42.6050043!4d-83.0917879!16s%2Fg%2F1vm_yhqs?entry=ttu" className="visited" rel="noreferrer" target="_blank">
              <button className="copy">{t('buttons.map')}</button>
            </a>
          </div>
        </Fade>
      </div> */}

      <footer>
        <div>
          <button className="copylink"
            onClick={() => navigator.clipboard.writeText('https://sinai228.github.io/wedding/')}
          >
            {t('buttons.copylink')}
          </button></div>
        {/* <div className="center">
          <button onClick={() => i18n.changeLanguage('kr')}>{t('buttons.kr')}</button>
          <button onClick={() => i18n.changeLanguage('en')}>{t('buttons.en')}</button>
        </div> */}
        <p> Copyright © 2024 Sinai Youngrak. All Rights Reserved</p>
      </footer>

    </div >
    // </BrowserRouter >
  );
}
        // }

        // export default App;
