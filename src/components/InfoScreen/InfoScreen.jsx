import React from "react";
import './InfoScreen.sass'

const InfoScreen = ({img, color, title}) => {
    const style_wrap = {backgroundColor: `rgba(${color}, 0.5)`}
    const style_bg = {backgroundImage: `url(${img})`}
    return(
        <section style={{...style_wrap}} className='info'>
            <div style={{...style_bg}} className="info-img"></div>
            <div className="info-data">
                <h1 className='info__title'>{title}</h1>
            </div>

        </section>
    )
}

export default InfoScreen