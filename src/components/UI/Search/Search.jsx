import React from "react";
import styles from './Search.module.scss'

function Search() {
    return <div className={styles.search}>
        <a href="/" className={styles.search__logo}>
            <i className='bx bx-search' />
        </a>
        <input type="text" className={styles.search__input} placeholder="I'm searching for..." />
        <a href="/" className={styles.search__customize}>
            <i className='bx bx-customize' ></i>
        </a>
    </div>
}

export default Search;