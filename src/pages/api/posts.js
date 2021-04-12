export default (req, res) => {
    return res.status(200).json([
        {
            title: "O que é um projeto luminotécnico? Como ele é feito?",
            img: "/images/blog/01.webp",
            postDate: "18/02/2021",
            preview: "Você já parou para pensar no impacto de como a disposição e quantidade de lâmpadas na sua residência ou empresa pode interferir no cotidiano? Por muitas vezes nos deparamos com ambientes escuros ou até mesmo com excesso de iluminação artificial, afetando diretamente no bem-estar das pessoas que convivem naquele espaço. Hoje, a Consultec vai te explicar como um bom planejamento luminotécnico proporciona uma iluminação adequada trazendo ambientes agradáveis e confortáveis. Não deixe de conferir!"
        },
        {
            title: "Vai construir? Quais são os principais desafios?",
            img: "/images/blog/02.webp",
            postDate: "18/03/2021",
            preview: "Não é de hoje que o mercado ressalta a grande importância de um projeto em qualquer obra na construção civil. Diante disso, muitas pessoas têm reconhecido essa necessidade. Entretanto, ainda existem algumas dúvidas sobre como ocorre a elaboração desses projetos. O projeto atrasa por incompetência do projetista? Um projeto está isento de imprevistos? Se você é estudante da área, ou solicitou um projeto que teve algum imprevisto e lhe deixou desconfiado, esse artigo é para você."
        },
        {
            title: "Regularização: Como ter certeza que seu imóvel está seguro!",
            img: "/images/blog/03.jpg",
            postDate: "25/02/2021",
            preview: "Em verdade, quando você se torna responsável por algum local de convivência como um edifício residencial ou imóvel comercial, uma série de responsabilidades surgem, entre elas está a de reunir todos os documentos necessários para que seu edifício fique dentro da lei, como Projeto de Combate à Incêndio, inspeções etc. Para isso, a Consultec Jr está aqui para te ajudar e vai te dizer quais são os documentos obrigatórios de um prédio e o que é necessário para regularizá-lo. Vamos lá?!"
        },
    ])
} 