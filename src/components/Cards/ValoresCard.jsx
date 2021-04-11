export default function ValoresCard(props){
    return (
        <div className="container has-text-centered">
            <img src={`/images/valores/sn-icon${props.img}.png`}/>
            <h1 className="is-size-6 has-text-white has-text-weight-bold mt-4">
                {props.descricao}
            </h1>
        </div>
    )
}