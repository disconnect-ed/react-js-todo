import React from "react";
import './List.sass'
import {ListItem} from "./ListItem";


const List = ({textColor, todos}) => {
    let listItem = todos.map(item => <ListItem item={item} textColor={textColor} />)

    return(
        <section className='list'>
            <div className="list-todo">
                {listItem}
            </div>

        </section>
    )
}

export default List