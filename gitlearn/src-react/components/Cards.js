import React, { Component } from 'react';

import styles from "./Cards.module.css"
import Card from './Card';

import axe11 from "../images/11.webp"
import axe12 from "../images/12.webp"
import axe13 from "../images/13.webp"
import axe14 from "../images/14.webp"

class cards extends Component {
    render() {
        return (
            <div className={styles.container}>
                < Card image={axe11} name="axe 11" cost="50$" />
                < Card image={axe12} name="axe 12" cost="150$" />
                < Card image={axe13} name="axe 13" cost="520$" />
                < Card image={axe14} name="axe 14" cost="750$" />
            </div>
        );
    }
}

export default cards;