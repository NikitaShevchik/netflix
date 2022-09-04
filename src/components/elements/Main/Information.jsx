import React from "react";
import Button from "../../UI/Button/Button";
import styles from './Main.module.scss'

function Information({ movie }) {

    const addToFavorites = (movieName) => {
        let favorites = localStorage.getItem('favoriteMovies');
        alert(`${movie.name} тепер в избранном`)
        if (favorites) {
            favorites = JSON.parse(favorites)
            localStorage.setItem('favoriteMovies', [...favorites, movie.name]);
            alert(`${movieName} тепер в избранном`)
        } else {
            localStorage.setItem('favoriteMovies', movie.name);
        }
    }

    function playMovie() {
        alert(`${movie.name} начинает проигрываться!`)
    }


    return <div className={styles.information}>
        <div className={styles.information__logo}>
            <img src={movie.logo} alt={movie.name} width="250" />
        </div>
        <div className={styles.information__details}>
            <div className={styles.information__year}>{movie.year}</div>
            <div className={styles.information__age}>{movie.limitAge}</div>
            <div className={styles.information__rating}>IMDB {movie.rating}</div>
            <div className={styles.information__duration}>{movie.duration}</div>
        </div>
        <div className={styles.information__description}>
            {movie.description}
        </div>
        <div className={styles.information__actions} >
            <Button
                icon={<i className='bx bx-play'></i>}
                text='Play'
                iconFS='60px'
                iconColor='#c62e21'
                cb={playMovie}
            />
            <Button
                icon={<i className='bx bx-plus' ></i>}
                text='My list'
                cb={addToFavorites}
            />
        </div>
    </div >
}

export default Information;
