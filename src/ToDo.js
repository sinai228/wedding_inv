// import Fade from 'react-reveal/Fade';
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import Button from '@mui/material/Button';
import main from './assets/faq.JPG';
import { useTranslation } from "react-i18next";
import Fade from 'react-reveal/Fade';

import './ToDo.css';
import Navbar from './components/Header2.js';



function ToDo() {

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
  const { t } = useTranslation("common");

  return (
    <div className="FAQ" >
      <header className={classes}>
         <header className="navbar">
          <Navbar></Navbar>
        </header>
      </header>
  {/*   <Fade bottom delay={1000}>  */}

        <div className="body">
          <div id="home" className="middle" style={{
            backgroundImage: `url(${main})`, height: '500px', alignItems: 'center'
          }}>
          </div>
          <div className="padding-10">

            <div>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  What is the timeline for the day?
        </AccordionSummary>
                <AccordionDetails>
                  <p>Ceremony will start at 11:30am. After the ceremony, guests can drive over to the reception place (about 15 minutes away) where lunch will be served around 1pm.   </p>
                   <p>  Please come to the venue at least 30 minutes prior to the official ceremony start time so everyone can get settled before the proceedings begin.
                </p></AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  What is the dress code?
        </AccordionSummary>
                <AccordionDetails>
                  <p>Semi-formal</p>
                  <p>Just a notch below cocktail. Please wear what looks best on you! (all events will be indoors)
                </p>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  Can I bring a plus one?
        </AccordionSummary>
                <AccordionDetails>
                  <p>Unfortunately, we are at capacity and cannot accommodate more guests on the big day, so please accept our sincere apologies! 
                </p></AccordionDetails>
              </Accordion>
              {/* <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  Am I allowed to bring children?
        </AccordionSummary>
                <AccordionDetails>
                  <p>If we haven't specifically mentioned it to you, unfortunately, we are at capacity and cannot accommodate more guests on the big day, so please accept our sincere apologies!
               </p> </AccordionDetails>
              </Accordion>*/}

              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  Will the ceremony be held in English?
                 </AccordionSummary>
                <AccordionDetails>
                  <p>No, the ceremony will be held in Korean. 
                </p></AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  Where can I park?
                 </AccordionSummary>
                <AccordionDetails>
                  <p>You'll have plenty of free parking at the venue, and at the restaurant where reception will be held.
                </p></AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  How do I RSVP?
                 </AccordionSummary>
                <AccordionDetails>
                  <p>Please RSVP by 3/8/24 by letting either the bride/groom know.
                </p></AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  I don't think I can make it. Can I attend via online?
        </AccordionSummary>
                <AccordionDetails>
                  <p>Yes, we will be broadcasting the ceremony live via Youtube.   </p><p>Please join us if you're abroad in South Korea, Indonesia, or in any other states in the USA.
                </p></AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  Will food be served?
                 </AccordionSummary>
                <AccordionDetails>
                  <p>Yes, lunch will be served from 1pm. Please eat breakfast before you come, so you don't end up hangry:D
                 </p></AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  What if I have dietary restrictions?
                 </AccordionSummary>
                <AccordionDetails>
                  <p>Please let the bride/groom know.</p>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  Is it an open bar?
                 </AccordionSummary>
                <AccordionDetails>
                  <p> No, there won't be an open bar.
                </p></AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3-content"
                  id="panel3-header"
                >
                  Any recommendations for some things to do before/after the wedding?
        </AccordionSummary>
                <AccordionDetails>
                  <div>Cafe</div>
                  <p>La Ventana Cafe</p>
                  <p>White Wolf Pattiesierre</p>
                  <p>Tous Les Jours</p>
                  <p>Cannelle Patisserie</p>
                  <p>Drifter Coffee</p>
                  <p>Kresge Court</p>
                  <p>Gathering Coffee Co.</p>
                  <p>The Congregation</p>
                  <p>Premium Matcha Cafe Maiko</p>
                  <div>Restaurants</div>
                  <p>BBQ Chicken </p>
                  <p>Noori Pocha</p>
                  <p>Birmingham Sushi Cafe</p>
                  <p>Noori Pocha</p>
                  <p>Asian Express</p>
                  <p>Noble Fish</p>
                  <p>Sushi Hana</p>
                  <p>Detroit Shipping Company</p>
                  <p>Tienda Mexicana</p>
                  <p>Satay House</p>
                  <p>Frita Batidos</p>
                  <p>Marsa</p>
                  <div>
                    Downtown
                  </div>
                  <p>Eastern Market</p>
                  <p>Belle Ille</p>
                  <p>Detroit Riverfront</p>
                  <p>Campus Martius Park</p>
                  <p>Detroit Institute of Arts</p>
                  <div>
                    Parks
                  </div>
                  <p>Innovation Hills</p>
                  <p>Cranbrook House and Gardens</p>
                  <div>
                    Shopping
                  </div>
                  <p>IKEA</p>
                  <p>Somerset Collection</p>
                  <p>Greater Lakes Outlet</p>
                </AccordionDetails>

              </Accordion>
            </div>
          </div>



        </div>
       {/*  </Fade>*/}
      {/* <button onClick={() => i18n.changeLanguage('kr')}>{t('buttons.kr')}</button>
      <button onClick={() => i18n.changeLanguage('en')}>{t('buttons.en')}</button> */}

      <footer><p> Copyright © 2024 Sinai Youngrak. All Rights Reserved</p></footer>
    </div >
  );
}

export default ToDo;
