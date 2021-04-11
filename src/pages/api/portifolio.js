export default (req,res) => {
    return res.status(200).json([
        {
            title: "SUÍTE COM VARANDA",
            img : "/images/portifolio/suite.png"
        },
        {
            title: "BANHEIOS",
            img : "/images/portifolio/banheiros.png"
        },
        {
            title: "QUARTOS",
            img : "/images/portifolio/quartos.png"
        },
    ])
}