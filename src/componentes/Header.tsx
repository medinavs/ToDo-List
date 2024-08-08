import styles from './Header.module.css';
import png from '../assets/rocket.png'


export function Header () {
    return (
        <header className={styles.header}>
            <img src={png} alt="logo" />
            <h1>todo</h1>
        </header>
    )
}