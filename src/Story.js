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
              <span className="youngrak">{t('story.he')}: </span> </div>
            <div className="half">
              <span className="sinai">{t('story.she')}: </span>처음에는 그냥 재미있는 오빠네 싶었어요. 두달간 매일 같은곳에서 공부하느라 자주 마추졌는데 엄청 깍듯이 대해서 친해지기 어려운 사람이구나 했죠.
             사이로 친해졌어요. </div>
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
                  <span className="youngrak">{t('story.he')}: </span> </div>
                <div className="half">
                  <span className="sinai">{t('story.she')}: </span>
              이 달에 주차장에서 처음으로 지나친 기억이 있는데 와 사슴 같은 눈망울을 가진 분이다 라고 생각했죠.
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
                  <span className="youngrak">{t('story.he')}: </span> </div>
                <div className="half">
                  <span className="sinai">{t('story.she')}: </span>
              함께 공부하던 언니오빠들이 떠나 처음으로 저희 둘이 한 공간에 있게 되었어요.
              한 질문이 그 다음 질문으로 이어지고 거의 6시간을 이야기 하는데 처음으로 오?
              이 오빠가 조금 궁금해지는데? 라는 생각이 들더라구요
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
                  <span className="youngrak">{t('story.he')}: </span> </div>
                <div className="half">
                  <span className="sinai">{t('story.she')}: </span>
              학기가 끝나고 오빠가 불도저처럼 대쉬를 하더라구요. 이 때 많은 상황이 불확실하기도 했고
              연애할 마음이 없었던 저의 마음을 오빠가 살며시 뒤바뀌었어요. 크리스마스 주에 저와 제 친구가 코로나를
              걸렸을때도 맨날 찾아봐 병간호를 해 주는 오빠의 노력에 저의 마음을 확인하게 됐습니다.
              </div>
              </TimelineContent>

            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
              </TimelineSeparator>
              <TimelineContent>01.05.22<div className="half">
                <span className="youngrak">{t('story.he')}: </span>{t('story.t4')}</div>
                <div className="half">
                  <span className="sinai">{t('story.she')}: </span>
              응 그래!
              </div></TimelineContent>

            </TimelineItem>
            <div>
              <p>{t('story.t5')}</p>
            </div>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot variant="outlined" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>04.30.22

                <div className="half">
                  <span className="youngrak">{t('story.he')}: </span> </div>
                <div className="half">
                  <span className="sinai">{t('story.she')}: </span>
                열혈하게 공부하고 땀내고 일하고 했던 4년이 모두 끝이 나 졸업을 함꼐 했죠. 제일
                힘들었던 학기동안 힘이 되주었던 오빠와 졸업을 함꼐하고 서로의 취준기간에
                보탬이 되었던 은혜로웠던 시간들이었어요. 제 첫 직장이 다른 주인줄 알았을떄 오빠가
                바로 구글지도를 켜 얼마나 걸리나 찾아보던 오빠의 모습에 한 번 더 반했어요.
              </div>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>12.28.22
              <p></p>
                <div className="half">
                  <span className="youngrak">{t('story.he')}: </span> </div>
                <div className="half">
                  <span className="sinai">{t('story.she')}: </span>
                열혈하게 공부하고 땀내고 일하고 했던 4년이 모두 끝이 나 졸업을 함꼐 했죠. 제일
                힘들었던 학기동안 힘이 되주었던 오빠와 졸업을 함꼐하고 서로의 취준기간에
                보탬이 되었던 은혜로웠던 시간들이었어요. 제 첫 직장이 다른 주인줄 알았을떄 오빠가
                바로 구글지도를 켜 얼마나 걸리나 찾아보던 오빠의 모습에 한 번 더 반했어요.
              </div>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot variant="outlined" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>03.23.23
              <div className="half">
                  <span className="youngrak">{t('story.he')}: </span> </div>
                <div className="half">
                  <span className="sinai">{t('story.she')}:</span> 우연찮게 오빠의 가족이 미국에 놀러와 한 끼를 함께 할 시간이 있었어요.
                만나고 집을 돌아왔을때 아 결혼해도 되겠다 라는 생각이 더 크게 들었던 것 같아요

              </div>

              </TimelineContent>

            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot variant="outlined" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>summer 2023
             <p>{t('story.t8')}</p>
                <div className="half">
                  <span className="youngrak">{t('story.he')}: </span> </div>
                <div className="half">
                  <span className="sinai">{t('story.she')}: </span>

                </div>

              </TimelineContent>

            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot variant="outlined" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>08.2023
             <p>늘어난 우리의 가족</p>
                <div className="half">
                  <span className="youngrak">{t('story.he')}: </span> </div>
                <div className="half">
                  <span className="sinai">{t('story.she')}: </span>
                </div>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot variant="outlined" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>12.2023
             <p>우리 결혼할까? </p>
                <div className="half">
                  <span className="youngrak">{t('story.he')}: </span> </div>
                <div className="half">
                  <span className="sinai">{t('story.she')}: </span>

                </div>

              </TimelineContent>

            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot variant="outlined" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>08.2023
             <p>{t('story.t9')}</p>
                <div className="half">
                  <span className="youngrak">{t('story.he')}: </span> </div>
                <div className="half">
                  <span className="sinai">{t('story.she')}: </span>
                </div>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot variant="outlined" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>1.2024
             <p>{t('story.t10')} </p>
                <div className="half">
                  <span className="youngrak">{t('story.he')}: </span> </div>
                <div className="half">
                  <span className="sinai">{t('story.she')}: </span>

                </div>

              </TimelineContent>

            </TimelineItem>

            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot variant="outlined" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>05.2024
             <p>{t('story.t11')}</p>
                <div className="half">
                  <span className="youngrak">{t('story.he')}: </span> </div>
                <div className="half">
                  <span className="sinai">{t('story.she')}: </span>
                </div>
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
