import { useState, useEffect } from 'react';
import TagComponent from './tagComponent'
import './footer.css';
import useWindowSize from '../../helperFunctions/windowResize'
import InterComb from '../interComb/interComb';

function Footer() {
    const size = useWindowSize();
    return (
        <div className="footerContainer">
            <div className='line' />
            {size.width > 700 ?
                <>
                    <div className="footerLinksContainer">
                        <img src='images/wareLogo.png' alt='logo' style={{ paddingTop: 25 }} />
                        <TagComponent title='Platform' li={['How it works', 'Technology', 'Compatibility']} />
                        <TagComponent title='Company' li={['About us', 'Blog', 'Careers', 'Privacy']} />
                        <TagComponent title='Tools' li={['Pricing', 'ROI Calculator', 'FAQ', 'Support']} />
                        <TagComponent title='Get started' li={['Get a demo', 'Explore Ware Cloud', 'Contact us']} />
                        <TagComponent title='Stay in touch' li={['News & updates']} inputNeeded={true} />
                    </div>
                    <div className="footerCopyRightContainer">
                        <p>Copyright © 2022 Ware. All rights reserved.</p>
                    </div>
                </>
                :
                <>
                    <div className="footerLinksContainer">
                        <div>
                            <img src='images/wareLogo.png' alt='logo' />
                            <TagComponent title='Platform' li={['How it works', 'Technology', 'Compatibility']} mobileResize={size.width < 700} />
                            <TagComponent title='Company' li={['About us', 'Blog', 'Careers', 'Privacy']} mobileResize={size.width < 700} />
                            <TagComponent title='Tools' li={['Pricing', 'ROI Calculator', 'FAQ', 'Support']} mobileResize={size.width < 700} />
                        </div>
                        <div>
                            <TagComponent title='Get started' li={['Get a demo', 'Explore Ware Cloud', 'Contact us']} mobileResize={size.width < 700} />
                            <TagComponent title='Stay in touch' li={['News & updates']} inputNeeded={true} mobileResize={size.width < 700} />
                        </div>
                    </div>
                    <div className="footerCopyRightContainer">
                        <p>Copyright © 2022 Ware. All rights reserved.</p>
                    </div>
                </>
            }
            <InterComb />
        </div>
    );
}

export default Footer;
