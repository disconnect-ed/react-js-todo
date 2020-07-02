import React from "react";
import './InfoScreen.sass'
import {faBars, faTimes} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const InfoScreen = ({img, color, title, showMenu, menu}) => {
    const style_wrap = {backgroundColor: `rgba(${color}, 0.5)`}
    const style_bg = {backgroundImage: `url(${img})`}
    return(
        <section style={{...style_wrap}} className='info'>
            <div className="info-menu">
                <button className='info-menu__button' onClick={() => showMenu(!menu)}>
                    {menu ?
                        <FontAwesomeIcon style={{color: `rgba(${color})`}} icon={faTimes} />
                        :
                        <FontAwesomeIcon icon={faBars} />
                    }
                </button>
            </div>
            <div style={{...style_bg}} className="info-img"></div>
            <div className="info-data">
                <h1 className='info__title'>{title}</h1>
            </div>

        </section>
    )
}

export default InfoScreen