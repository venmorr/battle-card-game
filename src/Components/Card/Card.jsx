// imports
import bettaImage from '../../assets/betta-fish-fighter.jpeg'

// css
import styles from './Card.module.css'

const Card = ({title, hp, abilityTitle, abilitySubtitle, abilityText, atk, def, spe, int}) => {



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
                <div className={styles.info}>
                    <div className={styles.text}>
                        <div className={styles.ability}>
                            <p>{abilityTitle}</p>
                            <p>{abilitySubtitle}</p>
                        </div>
                        <p>{abilityText}</p>
                    </div>
                    <div className={styles.stats}>
                        <div className={styles.atk}>
                            {atk}
                        </div>
                        <div className={styles.def}>
                            {def}
                        </div>
                        <div className={styles.spe}>
                            {spe}
                        </div>
                        <div className={styles.int}>
                            {int}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card