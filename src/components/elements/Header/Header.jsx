import React from "react";
import Search from "../../UI/Search/Search";
import styles from './Header.module.scss'
import Profile from "./Profile";

function Header() {
    return <div className={styles.header}>
        <div className={styles.header__left}>
            <a href="/">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
                    alt="Netflix"
                    height='38'
                    width='124'
                />
            </a>
            <Search />
        </div>
        <Profile />
    </div>
}

export default Header;