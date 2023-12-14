import styles from './Loading.module.css'
import loading from '../../img/loading.svg'


export function Loading() {
    return (
        <div className={styles.loader_container}>
            <img src={loading} alt="Loading" className={styles.loader}/>
        </div>
    )
}