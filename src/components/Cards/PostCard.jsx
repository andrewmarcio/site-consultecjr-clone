export default function PostCard(props){

    return (!props.direction || props.direction !== "horizontal") ? (
        <div className="card" style={{
            height: "100%"
        }}>
            <div className="card-image">
                <figure className="image is-2by1">
                    <img src={props.postImg}/>
                </figure>
            </div>
            <div className="card-content" >
                <div className="media">
                    <div className="media-content">
                        <p className="title is-5">{props.title}</p>
                        <p className="subtitle is-7 has-text-danger has-text-weight-bold">Postado em: {props.datePost}</p>
                    </div>
                </div>

                <div className="content" style={{
                    height: "12rem"
                }}>
                    <p className="is-size-7 has-text-black has-text-justified">
                        {props.preview}
                    </p> 
                </div>

                <div 
                    className="container has-text-centered" 
                    style={{
                            position: "relative",
                            bottom: "0"
                        }}
                >
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
    ) : (
        <div>teste</div>
    )
}