import { useState } from 'react';
import './interComb.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage, faX } from '@fortawesome/free-solid-svg-icons'

function InterComb() {
    const [clicked, setClicked] = useState(false)

    const clickHandler = () => {
        setClicked(!clicked)
        console.log(clicked)
    }
    return (
        <div  className="interCombMainContainer" onClick={() => clickHandler()}>
            {
                clicked ? 
                <FontAwesomeIcon icon={faX} style={{fontSize: 25}} /> 
                :
                <FontAwesomeIcon icon={faMessage} style={{fontSize: 25}} />
            }
        </div>
    );
}

export default InterComb;
