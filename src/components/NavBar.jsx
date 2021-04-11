import styles from "../styles/components/NavBar.module.css"

export default function NavBar(props){
    return (
        <div className="navbar box is-radiusless m-0" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item p-3" href="#">
                    <img src="images/logo.png"/>
                </a>

                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
            </div>

            <div className="navbar-end">
                <a className={"navbar-item"}>
                    INÍCIO
                </a>

                <a className={"navbar-item"}>
                    SOBRE NÓS
                </a>

                <a className={"navbar-item"}>
                    SERVIÇOS
                </a>
                <a className={"navbar-item"}>
                    PORTIFÓLIO
                </a>
                <a className={"navbar-item"}>
                    BLOG
                </a>
                <a className={"navbar-item"}>
                    DEPOIMENTOS
                </a>
                <a className={"navbar-item"}>
                    CONTATO
                </a>

                <div className="navbar-item">
                    <div className="buttons">
                    <a className={styles.hoverableButtom+" "+"button is-danger p-4"}>
                        <strong>NEWSLETTER</strong>
                    </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}