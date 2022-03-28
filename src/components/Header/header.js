import { useState, useEffect } from 'react';
import { Animated } from 'react-animated-css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './header.css';

import useWindowSize from '../../helperFunctions/windowResize'
import { faBars } from '@fortawesome/free-solid-svg-icons'


function Header() {
  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  // const color = colors[Math.floor(Math.random() * 9)];
  const [visible, setVisible] = useState(true);
  const [dropDownClicked, setDropDownClicked] = useState(false);

  const size = useWindowSize();
  // const bars = <FontAwesomeIcon icon={faBars} style={{fontSize:25}} onClick={()=> setDropDownClicked(!dropDownClicked)} />

  function hideMe() {
    setVisible(false);
  }

  // let style = { borderColor: color, backgroundColor: color };
  // if (!visible) style.display = "none";

  const onScroll = (e) => {
    setScrollTop(e.target.documentElement.scrollTop);
    setScrolling(e.target.documentElement.scrollTop > scrollTop);
    if (scrollTop > 90) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    console.log(scrollTop);
    if (size.width > 900) {
      setDropDownClicked(false);
    }
  }, [scrollTop, size])

  return (
    <>
      {/* {scrollTop <= 90 ? */}
      <Animated
        animationIn="slideInDown"
        animationOut="slideOutUp"
        animationInDuration={400}
        animationOutDuration={400}
        isVisible={visible}
      // style={visible ? null : { display: "none" }}
      >
        <div className='headerMeetingContainer'>
          <p>Meet Ware at MODEX in March!</p>
          <div className='meetingBtn'>
            <p>
              Schedule a Meeting
            </p>
          </div>
        </div>
        <div className="headerContainer" style={scrollTop > 90 ? { position: 'fixed', top: 0, zIndex: 8, width: '100%',     boxShadow: '0px 1px 11px 1px rgb(0 0 0 / 30%)' } : null}>
          <div className='logoConatiner' style={size.width < 900 ? { justifyContent: 'start', padding: '0 10px' } : null}>
            <img src='images/wareLogo.png' />
          </div>
          {size.width < 900 ?
            <div className='mobileNavLinkContainer' style={size.width < 900 ? { padding: '0 10px' } : null}>
              {/* {bars} */}
              <div className='barContainer' onClick={() => { setDropDownClicked(!dropDownClicked) }} style={dropDownClicked ? { background: '#157FFE', color: '#F5F5F5' } : null}>
                <FontAwesomeIcon icon={faBars} style={{ fontSize: 25 }} />
              </div>
            </div>
            :
            <>
              <div className='navLinkConatiner'>
                <ul className='navLinkUl'>
                  <li className='navLinkLi'>How it works</li>
                  <li className='navLinkLi'>Technology</li>
                  <li className='navLinkLi'>Compatibility</li>
                  <li className='navLinkLi'>Pricing</li>
                </ul>
              </div>
              <div className='btnContainer'>
                <div className='loginBtn'>
                  <p>Login</p>
                </div>
                <div className='getDemoBtn'>
                  <p>
                    Get Demo
                  </p>
                </div>
              </div>
            </>
          }
          {dropDownClicked ?
            <div className='mobileNavcontainer'>
              <div className='mobileNavLinkConatiner'>
                <ul className='mobileNavLinkUl'>
                  <li className='mobileNavLinkLi'>How it works</li>
                  <li className='mobileNavLinkLi'>Technology</li>
                  <li className='mobileNavLinkLi'>Compatibility</li>
                  <li className='mobileNavLinkLi'>Pricing</li>
                </ul>
              </div>
              <div className='mobileBtnContainer'>
                <div className='mobileLoginBtn'>
                  <p>Login</p>
                </div>
                <div className='mobileGetDemoBtn'>
                  <p>
                    Get Demo
                  </p>
                </div>
              </div>
            </div> : null}

        </div>
      </Animated>
    </>
  );
}

export default Header;
