import React from "react";
import styles from './Header.module.scss'

function Profile() {
    return <div className={styles.profile}>
        <div className={styles.profile__body}>
            <a href="/" className={styles.profile__notification}>
                <i class='bx bxs-bell'></i>
            </a>
            <div >
                <a href="/" className={styles.profile__mini}>
                    <img
                        src="https://zooclub.ru/attach/34000/34846.jpg"
                        alt="Avatar"
                        className={styles.profile__avatar}
                        height='50'
                        width='50'
                    />
                    <div className={styles.profile__opener}></div>
                </a>

            </div>
        </div>
    </div>
}

export default Profile;