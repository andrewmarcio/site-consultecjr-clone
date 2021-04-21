import styles from '../styles/components/Statistics.module.css'


export default function Statistics(props){
    return (
        <div className={styles.statistics +" "+ "columns is-mobile is-multiline p-0 m-0 pb-5"}>
          <div className={styles.statisticsItem +" "+"column is-one-quarter-widescreen is-half-mobile  has-text-centered"}>
            <div className={styles.statisticsItemContainer}>
              <p className="title has-text-white mt-6 p-5" style={{"font-size": "3.3rem"}}>{props.projetos}</p>
              <p className="heading has-text-white is-size-7">PROJETOS</p>
            </div>
          </div>
          <div className={styles.statisticsItem +" "+"column is-one-quarter-widescreen is-half-mobile  has-text-centered"}>
            <div className={styles.statisticsItemContainer}>
              <p className="title has-text-white mt-6 p-5" style={{"font-size": "3.3rem"}}>{props.anos}</p>
              <p className="heading has-text-white is-size-7">ANOS NO MERCADO</p>
            </div>
          </div>
          <div className={styles.statisticsItem +" "+"column is-one-quarter-widescreen is-half-mobile  has-text-centered"}>
            <div className={styles.statisticsItemContainer}>
              <p className="title has-text-white mt-6 p-5" style={{"font-size": "3.3rem"}}>{props.satisfacao}</p>
              <p className="heading has-text-white is-size-7">SATISFAÇÃO DO CLIENTE</p>
            </div>
          </div>
          <div className={styles.statisticsItem +" "+"column is-one-quarter-widescreen is-half-mobile  has-text-centered"}>
            <div className={styles.statisticsItemContainer}>
              <p className="title has-text-white mt-6 p-5" style={{"font-size": "3.3rem"}}>{props.posMembros}</p>
              <p className="heading has-text-white is-size-7">PÓS-MEMBROS NO MERCADO DE TRABALHO</p>
            </div>
          </div>
        </div>
    )
} 