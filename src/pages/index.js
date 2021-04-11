import styles from '../styles/Home.module.css'
import NavBar from "../components/NavBar";
import Statistics from '../components/Statistics';
import ValoresCard from '../components/Cards/ValoresCard';
import { useState } from 'react';
import ServiceCard from '../components/Cards/ServiceCard';
import Footer from '../components/Footer';
import Maps from '../components/Maps';

export default function Home() {
  const [valores, setValores] = useState([
    {descricao: 'INCONFORMISMO E PROATIVIDADE'},
    {descricao: 'COMPROMETIMENTO'},
    {descricao: 'SINERGIA'},
    {descricao: 'SENTIMENTO DE DONO'},
    {descricao: 'AUTODISCIPLINA'},
    {descricao: 'ÉTICA E EMPATIA'}
  ]) 
  const [services, setServices] = useState([
    {
      title: "INSPEÇÃO PREDIAL",
      img : "/images/services/inspecao.png"
    },
    {
      title: "ARQUITETURA DE INTERIORES",
      img : "/images/services/interiores.png"
    },
    {
      title: "PROJETO DE PREVENÇÃO E COMBATE A INCÊNDIO",
      img : "/images/services/incendio.png"
    },
    {
      title: "PROJETO ARQUITETÔNICO",
      img : "/images/services/arquitetonico.png"
    },
    {
      title: "PROJETO DE INSTALAÇÕES HIDROSSANITÁRIAS",
      img : "/images/services/hidrossanitarias.png"
    },
    {
      title: "LEVANTAMENTO ARQUITETÔNICO",
      img : "/images/services/levantamento.png"
    },
    {
      title: "PROJETO DE INSTALAÇÕES ELÉTRICAS",
      img : "/images/services/eletrica.png"
    },
    {
      title: "ORÇAMENTO DE OBRAS",
      img : "/images/services/obras.png"
    },
    {
      title: "PROJETO DE FACHADA",
      img : "/images/services/fachada.png"
    },
    {
      title: "PROJETO PAISAGÍSTICO",
      img : "/images/services/paisagem.png"
    },
    {
      title: "CONSULTORIA: LAYOUT",
      img : "/images/services/layout.png"
    },
    {
      title: "ESTUDO DE VIABILIDADE CONSTRUTIVA",
      img : "/images/services/viabilidade.png"
    },
    {
      title: "CONSULTORIA: LAYOUT ONLINE",
      img : "/images/services/Ativo_1.png"
    },
  ])

  return (
    <div className="main">
      <NavBar />
      <div className={styles.banner}>
        <div className={styles.bannerContainer}>
          <div className={styles.container}>
            <div className="columns m-0 p-0">
              <div className="column is-5 has-text-centered">
                <img src="/images/banner-logo.png" />
              </div>
              <div className="column" style={{"padding-top": "5rem"}}> 
                <h1 className="has-text-white" style={{"font-size":"3.3rem"}}>
                  PROJETANDO SONHOS E
                </h1>
                <h1 className="has-text-white" style={{"font-size":"3.3rem"}}>
                  CONSTRUINDO O
                </h1>
                <h1 className="has-text-white" style={{"font-size":"3.3rem"}}>
                  FUTURO.
                </h1>
                <div className="container">
                  <button className="button is-danger py-5" style={{backgroundColor: "rgb(150, 34, 29)"}}>
                    <span className="is-size-6">
                      SOLICITE UM ORÇAMENTO GRATUITO  
                    </span>  
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> {/* end banner*/}
      <div className="section p-0 m-0">
        <Statistics
          projetos="320"
          anos="21"
          satisfacao="98%"
          posMembros="+50%"
        />
      </div>
      <div className="section p-0 m-0">
        <div className={styles.aboutMe}>
          <div className="container pt-6">
            <div className="columns mt-6 pl-6">
              <div className="column pl-3">
                <div className="container py-5 pl-5 mt-5" style={{
                  borderLeft: "1rem solid rgb(150, 34, 29)"
                }}>
                  <h1 className="is-size-3 has-text-white has-text-weight-bold">
                    SOBRE NÓS
                  </h1>
                </div>
              </div>
              <div className="column">
                <img src="/images/about-me.png" style={{
                    float:'right',
                    marginTop: "-3rem"
                  }}/>
              </div>
            </div>
          </div>
          <div className="container pt-6">
            <div className="columns mt-6 pl-6">
              <div className="column is-5 pl-3">

                  <div className="container mb-6">
                    <h1 className="is-size-3 has-text-white has-text-weight-bold mb-6">
                      <span style={{
                        borderBottom: "0.5rem solid rgb(150, 34, 29)"
                      }}>
                        NOSSA HISTÓRIA
                      </span>
                    </h1>
                    <h3 className="has-text-white has-text-justified">
                    A Consultec Jr. é uma empresa especialista no ramo de arquitetura e engenharia civil, há mais de 20 anos no mercado, com o principal objetivo de gerar a melhor experiência para seus clientes.
                    Atuando no setor da construção civil, impactamos a vida de pessoas e negócios com a realização de projetos e demais serviços incluídos em nossa carta de serviços.​
                    Formados exclusivamente por alunos de graduação da Universidade Federal do Ceará e orientados por professores e profissionais da área, prezamos sempre por desenvolver soluções personalizadas e inovadoras para o mercado.
                    </h3>
                  </div>

                  <div className="container mb-6">
                    <h1 className="is-size-3 has-text-white has-text-weight-bold mb-6">
                      <span style={{
                        borderBottom: "0.5rem solid rgb(150, 34, 29)"
                      }}>
                      MISSÃO
                      </span>
                    </h1>
                    <h3 className="has-text-white has-text-justified">
                      Formar pessoas geradoras de valor para a sociedade por meio da vivência empresarial em arquitetura e engenharia civil.
                    </h3>
                  </div>
              </div>
              <div className="column ml-4">
                  <div className="container mb-6">
                    <h1 className="is-size-3 has-text-white has-text-weight-bold mb-6">
                      <span style={{
                        borderBottom: "0.5rem solid rgb(150, 34, 29)"
                      }}>
                      VALORES
                      </span>
                    </h1>
                    <div className="columns is-multiline px-2">
                      {valores.map((valor, key) => (
                        <div className="column is-4">
                          <ValoresCard
                            key={key} 
                            img={key+1}
                            descricao={valor.descricao}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section p-0 pb-6 m-0">
        <div className={styles.services}>
          <div className="container pt-6">
            <div className="columns my-6 pl-6">
              <div className="column pl-3">
                <div className="container py-5 pl-5 mt-5" style={{
                  borderLeft: "1rem solid rgb(150, 34, 29)"
                }}>
                  <h1 className="is-size-3 has-text-black has-text-weight-bold">
                    SERVIÇOS
                  </h1>
                </div>
              </div>
              <div className="column">
                <img src="/images/about-me.png" style={{
                    float:'right',
                    marginTop: "-3rem"
                  }}/>
              </div>
            </div>
            <div className="container pt-6">
              <div className="columns is-multiline">
                {services.map((service, key) => (
                  <div className="column is-3">
                    <ServiceCard
                      key={key}
                      title={service.title}
                      img={service.img}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Maps />
      <Footer />
    </div> 
  )
}
