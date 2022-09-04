import styles from './Details.module.scss'

function Details({ movie }) {
    return <div className={styles.details}>
        <div className={styles.details__body}>
            <div className={styles.logo}>
                <img src={movie.logo} alt={movie.name} width="250" />
            </div>
            <div className={styles.details__text}>
                {movie.details}
            </div>
        </div>
    </div>
}

export default Details;