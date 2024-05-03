// css
import styles from './Card.module.css'

const Card = ({datum}) => {



    return (
        <>
            <div className={styles.body}>
                <div className={styles.header}>
                    <div className={styles.type}></div>
                    <div className={styles.title}>
                        <p>{datum.title}</p>
                    </div>
                    <div className={styles.hp}>
                        <p>{datum.hp}</p>
                    </div>
                </div>
                <div className={styles.image}>
                    <img src={datum.image} alt="An image of Betta: Fish Fighter" />
                </div>
                <div className={styles.info}>
                    <div className={styles.text}>
                        <div className={styles.ability}>
                            <p>{datum.abilityTitle}</p>
                            <p>{datum.abilitySubtitle}</p>
                        </div>
                        <p>{datum.abilityText}</p>
                    </div>
                    <div className={styles.stats}>
                        <div className={styles.atk}>
                            {datum.atk}
                        </div>
                        <div className={styles.def}>
                            {datum.def}
                        </div>
                        <div className={styles.spe}>
                            {datum.spe}
                        </div>
                        <div className={styles.int}>
                            {datum.int}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card