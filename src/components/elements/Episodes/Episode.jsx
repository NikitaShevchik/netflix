import styles from './Episodes.module.scss'

function Episode({ photo, index, cb }) {
    return <button className={styles.episode} onClick={() => cb(index + 1)}>
        <div className={styles.index}><span>{index + 1}</span></div>
        <img src={photo} alt={`Episode ${index}`} />
    </button>
}

export default Episode;