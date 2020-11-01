import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const data = [{
    id: 1,
    status: "Reward",
    action: "default",
    title: 1,
    content: "Beverage",
    icon: <FontAwesomeIcon icon="mug-hot"/>
}, {
    id: 2,
    status: "Reward",
    action: "default",
    title: 2,
    content: "Food",
    icon: <FontAwesomeIcon icon="pizza-slice"/>
}, {
    id: 3,
    status: "Reward",
    action: "default",
    title: 3,
    content: "Gift Card",
    icon: <FontAwesomeIcon icon="credit-card"/>
}, {
    id: 4,
    status: "Reward",
    action: "default",
    title: 4,
    content: "Coupon",
    icon: <FontAwesomeIcon icon="ticket-alt"/>
}, {
    id: 5,
    status: "Reward",
    action: "default",
    title: 5,
    content: "Travel",
    icon: <FontAwesomeIcon icon="suitcase-rolling"/>
}];

const tableheader = [{
    icon:  <FontAwesomeIcon icon=""/>,
    title : 'Reward',
    status : 'Reward'
}, {
    icon:  <FontAwesomeIcon icon="bus-alt"/>,
    title : 'Bus',
    status : 'C1'
},{
    icon:  <FontAwesomeIcon icon="subway"/>,
    title : 'Subway',
    status : 'C2'
},{
    icon:  <FontAwesomeIcon icon="car"/>,
    title : 'Car Pool',
    status : 'C3'
},{
    icon:  <FontAwesomeIcon icon="bicycle"/>,
    title : 'Bike',
    status : 'C4'
},{
    icon:  <FontAwesomeIcon icon="walking"/>,
    title : 'Walk',
    status : 'C5'
}]




export { data, tableheader };