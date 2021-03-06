import styles from "../styles/components/Footer.module.css"

export default function Footer(){
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <div className="columns is-centered is-desktop px-4">
                    <div className="column is-3">
                        <div>
                            <p className="title is-size-5 has-text-white">SOBRE NÓS</p>
                            <p className="mt-5 is-size-6 has-text-white has-text-justified">
                                "Projetando sonhos por meio de soluções personalizadas em Arquitetura e Engenharia Civil."
                            </p>
                        </div>
                    </div>
                    <div className="column is-3 px-4">
                        <div>
                            <p className="title is-size-5 has-text-white">CONTATO</p>
                            <p className="mt-5 is-size-6 has-text-white">
                                <span><i className="mr-2 fas fa-phone-alt"></i> (85) 98184-4103</span>
                            </p>
                            <p className="is-size-6 has-text-white">
                                <span><i className="mr-2 far fa-envelope"></i> contato@consultecjr.com</span>
                            </p>
                        </div>
                    </div>
                    <div className="column is-3">
                        <div>
                            <p className="title is-size-5 has-text-white">FUNCIONAMENTO</p>
                            <p className="mt-5 is-size-6 has-text-white">
                                <span>Segunda a Sexta: 9h às 12h, 13h às 17h</span>
                            </p>
                        </div>
                        <div className="pt-4">
                            <p className="title is-size-5 has-text-white">REDES SOCIAIS</p>
                            <p className={styles.social+" "+"is-size-6 has-text-white"}>
                                <span>
                                    <a className="is-size-4 has-text-white mx-4" href="https://www.facebook.com/consultecjr/" target="_blank">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                </span>
                                <span>
                                    <a className="is-size-4 has-text-white mx-4" href="https://www.instagram.com/consultecjr/?hl=pt-br" target="_blank">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                </span>
                                <span>
                                    <a className="is-size-4 has-text-white mx-4" href="https://api.whatsapp.com/send?1=pt_BR&phone=558533669406" target="_blank">
                                        <i className="fab fa-whatsapp"></i>
                                    </a>
                                </span>
                            </p>
                        </div>                        
                    </div>
                </div>

                <div className="has-text-white has-text-centered pt-5" style={{
                    borderTop: "3px solid #fff"
                }}>
                    Consultec Jr © 2021 . Desenvolvido por Andrew Márcio
                </div>
            </div>
        </div>
    )
}