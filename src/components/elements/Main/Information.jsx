import React from "react";
import styles from './Information.module.scss'

function Information({ movie }) {
    return <div className={styles.information}>
        <div className={styles.information__logo}>
            <img src={movie.logo} alt="Logo" className={styles.information__image} />
        </div>
        <div className={styles.information__details}>
            <div className={styles.information__year}>{movie.year}</div>
            <div className={styles.information__age}>{movie.limitAge}</div>
            <div className={styles.information__rating}>IMDB {movie.rating}</div>
            <div className={styles.information__duration}>{movie.duration}</div>
        </div>
    </div>
}

export default Information;
