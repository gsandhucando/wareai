import './partnerLogos.css';

function PartnerLogos() {
    const companylogosArray = [
        'images/1.png',
        'images/2.png',
        'images/3.png',
        'images/4.png',
        'images/5.png',
        'images/6.png',
        'images/7.png',
        'images/8.png',
        'images/9.png',
        'images/10.png',
        'images/11.png',
        'images/12.png',
    ]
    return (
        <div  className="partnerLogosMainContainer">
        <div className="partnerLogosContainer">

            {
                companylogosArray.map((logo, i) => {
                    return (
                        <div className='logoContainer' key={i}>
                            <img key={i} src={logo} style={{ height: 60 }} />
                        </div>
                    )
                })
            }
        </div>
        </div>
    );
}

export default PartnerLogos;
