import React from 'react';
// import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
// import { BrowserRouter } from 'react-router-dom';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';
import { NavLink } from 'react-router-dom';
import Accordion from '@mui/material/Accordion';
// import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTranslation } from "react-i18next";
import MetaTags from 'react-meta-tags';

import './App.css';
import ThumbGallery from './components/Thumb.js';
import Navbar from './components/Header.js';
import Fade from 'react-reveal/Fade';
import moment from 'moment';

import main from './assets/main.png';
import ornament from './assets/bb.png';
import ornament2 from './assets/bbb.png';
import ornament3 from './assets/bb1.png';
import calendar from './assets/calendar.png';


export default function App() {
  // class Wedding extends React.Component {
  // render() {
  // SwiperCore.use([Navigation, Thumbs])
  // const [thumbsSwiper, setThumbsSwiper] = useState(null);
  // const [thumbs, setThumbs] = useState(null);

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
  var end = moment('2024-05-28');
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
        backgroundImage: `url(${main})`
      }}>
        <div className="padding-50">
          <p>WEDDING INVITATION</p>
          <p>  {t('name.groom')} | {t('name.bride')}
          </p>
        </div>
        <text className="thedate">8th August</text>
      </div>

      <header className="navbar">
        <Navbar></Navbar>
      </header>
      {/*
      <div className="babysbreath">
        <img src={ornament2} alt="f0" />
      </div> */}

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
                src="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90"
                srcSet="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90&dpr=2 2x"
                loading="lazy"
                alt="p1"
              />
            </AspectRatio>
          </CardOverflow>
          <Fade bottom delay={1000}>

            <CardContent>
              <Typography fontWeight="md" textColor="text.secondary" fontSize="4vw" textAlign="left">
                {t('name.groom')}
              </Typography>
              <div className="side">
                <Typography level="body-sm" fontSize="3.5vw" textAlign="left" fontFamily="Jeongnimsaji-R" > {t('name.groomp')} </Typography>
                <Typography level="body-sm" fontSize="2.5vw"
                  textAlign="left"
                  fontFamily="Jeongnimsaji-R"
                >  {t('name.3')} </Typography>
              </div>
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
                src="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90"
                srcSet="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90&dpr=2 2x"
                loading="lazy"
                alt="p2"
              />
            </AspectRatio>
          </CardOverflow>
          <Fade bottom delay={1000}>
            <CardContent>

              <div className="side">
                <Typography level="body-sm" fontSize="3.5vw" textAlign="left" fontFamily="Jeongnimsaji-R" > {t('name.bridep')} </Typography>
                <Typography level="body-sm" fontSize="2.5vw"
                  textAlign="left"
                  fontFamily="Jeongnimsaji-R"
                > 의 차녀 </Typography>
              </div>
              <Typography fontWeight="md" textColor="text.secondary" fontSize="3.5vw" textAlign="left" fontFamily="Jeongnimsaji-R">
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
          <img src={ornament} alt="f1" />
        </div>
        <Fade bottom delay={1000}>
          <p className="introtext">{t('introtext.1')}</p>
          <p>{t('introtext.2')} </p>
          <p>{t('introtext.3')}</p>
          <p>{t('introtext.4')}</p>
          <p> {t('introtext.5')}</p>
        </Fade>
        <div className="babysbreath">
          <img src={ornament} alt="f2" />
        </div>
      </div>

      <Fade bottom delay={1000}>
        <div id="home" className="border" style={{
          backgroundImage: `url(${main})`, height: '400px'
        }}>
        </div>
        <div className="babysbreath padding-50">
          <img src={ornament2} alt="f3" />
        </div>

        <div className="Dday ">
          {/* D-{diff}
          <p>until the marriage</p>
          <p> 영락 ♥︎ 시내의 결혼식이 {diff.toString()} 일 남았습니다
          </p> */}
          <span> {t('dday')}</span>
          {diff}<span> {t('dday2')}</span>
        </div>
      </Fade>
      <Fade bottom delay={600}>
        <div id="gallery" className="gallery ">
          <div className="banner">
            <p>we're getting married</p>
          </div>
          <ThumbGallery />
        </div >
      </Fade>
      <Fade bottom delay={600}>
        <div id="story" className="story">
          <p> {t('header.story')}</p>
          <button className="readmore">  <li><NavLink activeClass="active"
            to="/story"
            spy={true}
            smooth={true}
            offset={0}
            duration={750}>{t('header.read')}</NavLink></li></button>
        </div>  </Fade>
      <Fade bottom delay={600}>
        <div id="story" className="account">
          <p className="header"> {t('header.accounts')}</p>
          <p>♥︎</p>
          <div className="acc" >
            <Accordion className="acc" style={{ marginBottom: "15px", alignItems: "center", borderRadius: "15px" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"

              >
                {t('header.groom')}
              </AccordionSummary>
              <AccordionDetails>
                <div className="accdetail">
                  <span>Zelle 123123123</span>
                  <button className="acccopy"
                    onClick={() => navigator.clipboard.writeText('123123123')}
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
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                className="center"
              >
                {t('header.bride')}
              </AccordionSummary>
              <AccordionDetails>
                <div className="accdetail">
                  <span >Zelle 123123123</span>
                  <button className="acccopy"
                    onClick={() => navigator.clipboard.writeText('123123123')}
                  >
                    {t('buttons.cop')}
                  </button>
                </div>
                <div className="accdetail">
                  <span className="accdetail">국민은행 123123123</span>
                  <button className="acccopy"
                    onClick={() => navigator.clipboard.writeText('123123123')}
                  >
                    {t('buttons.cop')}
                  </button>
                </div>
              </AccordionDetails>
            </Accordion>

          </div>
        </div>
      </Fade>
      <Fade bottom delay={700}>
        <div className="verse">
          <div className="babysbreath">
            <img src={ornament3} alt="f0" />
          </div><p>
            {t('verse.body')}
          </p><p>
            {t('verse.passage')}
          </p>

          {/* <p>
            There is one body and one Spirit,
            just as you were called to one
            hope when you were called
        </p><p>
            Ephesians 4:4
        </p> */}
        </div>
      </Fade>

      <div id="more" className="location">
        <Fade bottom delay={700}>
          <p className="header">
            {t('header.details')}</p>
          {/* <div className="divider"> ______________________________________________________________ </div> */}
          <img className="calendar" src={calendar} alt="cal" />
          <p> {t('dday')}{diff}{t('dday2')}</p>
          {/* <p>♥︎</p> */}
          <div className="babysbreath">
            <img src={ornament} alt="f0" />
          </div>
          <p> {t('date')}</p>
          <p>{t('wed')}</p>
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
      </div>

      <footer>
        <div>
          <button className="copy"
            onClick={() => navigator.clipboard.writeText('htttps://www.ycspwedding.github.io/invite')}
          >
            {t('buttons.copylink')}
          </button></div>
        <div className="center">
          <button onClick={() => i18n.changeLanguage('kr')}>{t('buttons.kr')}</button>
          <button onClick={() => i18n.changeLanguage('en')}>{t('buttons.en')}</button>
        </div>
      </footer>

    </div >
    // </BrowserRouter >
  );
}
        // }

        // export default App;