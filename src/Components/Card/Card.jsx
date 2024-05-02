// imports
import bettaImage from '../../assets/betta-fish-fighter.jpeg'

// css
import styles from './Card.module.css'

const Card = ({title, hp}) => {



    return (
        <>
            <div className={styles.body}>
                <div className={styles.header}>
                    <div className={styles.type}></div>
                    <div className={styles.title}>
                        <p>{title}</p>
                    </div>
                    <div className={styles.hp}>
                        <p>{hp}</p>
                    </div>
                </div>
                <div className={styles.image}>
                    <img src={bettaImage} alt="An image of Betta: Fish Fighter" />
                </div>
                <div className={styles.info}></div>
            </div>
        </>
    )
}

export default Card