import React from 'react';

import styles from "./Banner.module.css";
import banner from "../images/life.jpg"

const Banner = () => {
    return (
        <div className={styles.container}>
            <img src={banner} alt="banner" />
            <div className={styles.textContainer}>
                <h1>BlueSparrow</h1>
                <p>
                the official native token to <span>BlueBit.io</span>
                </p>

            </div>
        </div>
    );
};

export default Banner;