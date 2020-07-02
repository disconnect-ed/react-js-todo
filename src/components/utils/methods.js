import morning from "../../assets/img/1.png";
import day from "../../assets/img/2.png";
import evening from "../../assets/img/3.png";
import night from "../../assets/img/4.png";

export const getTheme = () => {
    const hours = new Date().getHours()
    if (hours > 4 && hours < 9) {
        const theme = {
            img: morning,
            color: '138, 148, 127',
            textColor: 'rgb(138, 148, 127)',
            active: 'morning'
        }
        return theme
    }
    if (hours >= 9 && hours <= 16) {
        const theme = {
            img: day,
            color: '106, 186, 177',
            textColor: 'rgb(106, 186, 177)',
            active: 'day'
        }
        return theme
    }
    if (hours > 16 && hours <= 22) {
        const theme = {
            img: evening,
            color: '176, 103, 98',
            textColor: 'rgb(176, 103, 98)',
            active: 'evening'
        }
        return theme
    }
    if (hours > 22 || hours <= 4) {
        const theme = {
            img: night,
            color: '56, 64, 95',
            textColor: 'rgb(56, 64, 95)',
            active: 'night'
        }
        return theme
    }
}

export const getTitle = (location) => {
    if (location === '/add') return 'Добавить дело'
    if (location === '/all') return 'Все дела'
    if (location === '/favorite') return 'Избранные дела'
    if (location === '/urgent') return 'Срочные дела'
    if (location === '/search') return 'Поиск дела'
    if (location.indexOf('/edit') >= 0) return 'Редактирование дела'
    return 'Просмотр дела'
}

export const getDate = () => {
    const date = new Date()
    const day = date.getDate()
    const month = date.getMonth()
    const year = date.getFullYear()
    const hours = date.getHours()
    const minuts = date.getMinutes()
    const seconds = date.getSeconds()
    const fullDate = `${day}.${month}.${year} ${hours}:${minuts}:${seconds}`
    return fullDate
}