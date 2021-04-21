import styles from '../../styles/components/cards/PortifolioCard.module.css' 

export default function PortifolioCard(props){
    return (
        <div className="card">
            <div className="card-content" style={{
                background: `url("${props.img}") no-repeat`,
                backgroundSize: "100% 100%",
                height: "17rem",
            }}>
                <div className="content" style={{
                    height: "100%"
                }}>
                    <div className={styles.container}>
                        <div className="columns">
                            <div className="column is-10">
                                <h3 className="is-size-5 has-text-white has-text-weight-bold">
                                    {props.title}
                                </h3>
                            </div>
                            <div className="column is-2">
                                    <img src="/images/portifolio/logo.png" styles={{
                                        with: "25px"
                                    }}/>
                            </div>
                        </div>
                        <div className="container has-text-centered py-4" style={{
                            position: "absolute",
                            bottom: 0
                        }}>
                            <button className="button is-danger" style={{
                                backgroundColor: "rgb(150, 34, 29)"
                            }}>
                            <span className="is-size-6">
                                SAIBA MAIS  
                            </span>  
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}