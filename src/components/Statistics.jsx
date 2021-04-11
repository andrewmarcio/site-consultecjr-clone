import styles from '../styles/components/Statistics.module.css'


export default function Statistics(props){
    return (
        <div className={styles.statistics +" "+ "columns p-0 m-0"}>
          <div className={styles.statisticsItem +" "+"column has-text-centered"}>
            <div className={styles.statisticsItemContainer}>
              <p class="title has-text-white mt-6 p-5" style={{"font-size": "3.3rem"}}>{props.projetos}</p>
              <p class="heading has-text-white is-size-7">PROJETOS</p>
            </div>
          </div>
          <div className={styles.statisticsItem +" "+"column has-text-centered"}>
            <div className={styles.statisticsItemContainer}>
              <p class="title has-text-white mt-6 p-5" style={{"font-size": "3.3rem"}}>{props.anos}</p>
              <p class="heading has-text-white is-size-7">ANOS NO MERCADO</p>
            </div>
          </div>
          <div className={styles.statisticsItem +" "+"column has-text-centered"}>
            <div className={styles.statisticsItemContainer}>
              <p class="title has-text-white mt-6 p-5" style={{"font-size": "3.3rem"}}>{props.satisfacao}</p>
              <p class="heading has-text-white is-size-7">SATISFAÇÃO DO CLIENTE</p>
            </div>
          </div>
          <div className={styles.statisticsItem +" "+"column has-text-centered"}>
            <div className={styles.statisticsItemContainer}>
              <p class="title has-text-white mt-6 p-5" style={{"font-size": "3.3rem"}}>{props.posMembros}</p>
              <p class="heading has-text-white is-size-7">PÓS-MEMBROS NO MERCADO DE TRABALHO</p>
            </div>
          </div>
        </div>
    )
} 