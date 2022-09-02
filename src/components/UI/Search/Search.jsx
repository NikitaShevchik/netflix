import React from "react";
import styles from './Search.module.scss'

function Search() {
    return <div className={styles.search}>
        <a href="/" className={styles.search__logo}>
            <i class='bx bx-search' />
        </a>
        <input type="text" className={styles.search__input} placeholder="I'm searching for..." />
    </div>
}

export default Search;