import styles from "../../styles/components/cards/ServiceCard.module.css"

export default function ServiceCard(props){
    return (
        <div className={styles.cardBackground+" "+"card"}>
            <div className="card-content">
                <div className={styles.cardBackground+" "+"content"}>
                    <div className={styles.container}>
                        <div className={styles.title}>
                            <p className="has-text-centered has-text-white is-size-6">
                                {props.title}
                            </p>
                        </div>

                        <div className="mt-6 mb-4 p-2">
                            <figure>
                                <img src={props.img}/>
                            </figure>
                        </div>

                        <div className={styles.footer}>
                            <button className="button is-secundary">
                                SAIBA MAIS
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}