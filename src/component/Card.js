import React, { Fragment } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Item = ({ item, Onremove }) => {

    const onDragStart = ({ dataTransfer, target }) => {
        dataTransfer.setData("item", JSON.stringify(item));
        //setDragElement(item,'default');
        setTimeout(function() {
            target.style.visibility = "visible";
        }, 0);
    };

    const onDragEnd = e => e.target.style.visibility = "visible";
    const removeItem = (e) =>{Onremove(item);}

    return (
        <Fragment>
            <div
                className={"item"}
                draggable="true"
                onDragStart={onDragStart}
                
                onDragEnd={onDragEnd}
            >
                <div className = "flex">
                    <div><p className = "pIcon">{item.icon}</p>
                    <p className = "pContent">{item.content}</p>
                    </div>
                    <span className = {`iconContent type-${item.status}`} width="1px" height="1px"><FontAwesomeIcon onClick = {removeItem} icon="times" /></span>
                    
                </div>
            </div>
        </Fragment>
    );
};

export default Item;