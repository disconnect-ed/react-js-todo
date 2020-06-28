import React from "react";
import './Loading.sass'
import morning from '../../../assets/loading/morning.svg'
import day from '../../../assets/loading/day.svg'
import evening from '../../../assets/loading/evening.svg'
import night from '../../../assets/loading/night.svg'
import {useSelector} from 'react-redux'

export const Loading = () => {
    const theme = useSelector(state => state.app.theme)
    let themeLoading = null
    if (theme === 'morning') {
        themeLoading = morning
    }
    if (theme === 'day') {
        themeLoading = day
    }
    if (theme === 'evening') {
        themeLoading = evening
    }
    if (theme === 'night') {
        themeLoading = night
    }
    return (
        <div className="loading">
            <div>
                <img src={themeLoading} alt="Loading..."/>
            </div>
        </div>
    )
}