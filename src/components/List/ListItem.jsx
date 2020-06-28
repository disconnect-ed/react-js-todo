import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import {NavLink} from "react-router-dom";

export const ListItem = ({textColor, item}) => {
    return (
        <div style={item.urgent ? {backgroundColor: textColor} : null} className="list-item">
            <div className="list-item__info">
                    <span>
                        {item.favorite &&
                            <FontAwesomeIcon style={item.urgent ? {color: 'white'} : {color: textColor}} icon={faStar}/>
                        }
                    </span>
                <NavLink style={item.urgent ? {color: 'white'} : {color: textColor}} to={`/todo/${item.id}`}><span>{item.title}</span></NavLink>
            </div>
            <div style={item.urgent ? {color: 'white'} : null} className="list-item__date">
                {item.date}
            </div>
        </div>
    )
}