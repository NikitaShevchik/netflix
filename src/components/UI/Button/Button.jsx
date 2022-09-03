import React from 'react';
import styles from './Button.module.scss'

function Button({ icon, text, iconFS, iconColor }) {
    return <button className={styles.button}>
        <div className={styles.button__icon} style={{ fontSize: iconFS, color: iconColor }}>
            {icon}
        </div>
        <div className={styles.button__text}>
            {text}
        </div>
    </button>
}

export default Button;