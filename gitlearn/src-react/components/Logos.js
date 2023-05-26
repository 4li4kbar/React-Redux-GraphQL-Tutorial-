import React from 'react';

import styles from "./Logos.module.css";
import bot1 from "../images/bot1.jpg";
import bot2 from "../images/bot2.jpg";
import bot3 from "../images/bot3.jpg";

const Logos = () => {
    return (
        <div className={styles.container}>
            <h3>Articles Around Web</h3>
        <div>
            < img src={bot1} alt="logo" />
            < img src={bot2} alt="logo" />
            < img src={bot3} alt="logo" />
            </div>
         </div>
    );
};


export default Logos;