import Episode from './Episode';
import styles from './Episodes.module.scss'

function Episodes({ movie }) {
    function startEpisode(index) {
        alert(`Воспроизводим ${movie.name} часть ${index}`)
    }

    return <div className={styles.episodes}>
        <div className={styles.logo}>
            <img src={movie.logo} alt={movie.name} width="250" />
        </div>
        <div className={styles.episodes__list}>
            {movie.photos.map((photo, index) => {
                return <Episode key={index} photo={photo} index={index} cb={startEpisode} />
            })}
        </div>
    </div>
}

export default Episodes;