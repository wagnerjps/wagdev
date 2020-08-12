import React from 'react'

import './styles.css'

const GitItem = ({title, language, stargazers}) => {
    language = (!language) ? 'variadas' : language
    stargazers = (!stargazers) ? '0' : stargazers
    return(
        <div className="gitItens">
            <p>{title}</p>
            <span>Tecnologias: {language} / Estrelas: {stargazers}</span>
        </div>
    )
}

export default GitItem