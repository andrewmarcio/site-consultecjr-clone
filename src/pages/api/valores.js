export default (req, res) => {
    return res.status(200).json([
        {descricao: 'INCONFORMISMO E PROATIVIDADE'},
        {descricao: 'COMPROMETIMENTO'},
        {descricao: 'SINERGIA'},
        {descricao: 'SENTIMENTO DE DONO'},
        {descricao: 'AUTODISCIPLINA'},
        {descricao: 'ÉTICA E EMPATIA'}
      ])
}