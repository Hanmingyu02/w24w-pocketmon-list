import React, { useState } from 'react';

const PokemonCard = (props) => {
    const [isExplanationVisible, setIsExplanationVisible] = useState(false);

    const toggleExplanation = () => {
        setIsExplanationVisible(prevState => !prevState);
    };

    const pokemonLinks = {
        "고오스": "https://pokemon.fandom.com/ko/wiki/%EA%B3%A0%EC%98%A4%EC%8A%A4_(%ED%8F%AC%EC%BC%93%EB%AA%AC)",
        "고우스트": "https://pokemon.fandom.com/ko/wiki/%EA%B3%A0%EC%9A%B0%EC%8A%A4%ED%8A%B8_(%ED%8F%AC%EC%BC%93%EB%AA%AC)",
        "팬텀": "https://pokemon.fandom.com/ko/wiki/%ED%8C%AC%ED%85%80_(%ED%8F%AC%EC%BC%93%EB%AA%AC)",
        "메가팬텀": "https://pokemon.fandom.com/ko/wiki/%EB%A9%94%EA%B0%80%ED%8C%AC%ED%85%80_(%ED%8F%AC%EC%BC%93%EB%AA%AC)",
        "거다이맥스 팬텀": "https://pokemon.fandom.com/ko/wiki/%ED%8C%AC%ED%85%80_(%ED%8F%AC%EC%BC%93%EB%AA%AC)#%EA%B1%B0%EB%8B%A4%EC%9D%B4%EB%A7%A5%EC%8A%A4"
    };

    return (
        <div className="pokemon-card">
            <a href={pokemonLinks[props.name]} target="_blank" rel="noopener noreferrer">
                <img src={props.imageSrc} alt={props.name} className="image" />
            </a>
            <div className="card-content">
                <h3 className="left" onClick={toggleExplanation} style={{ cursor: 'pointer' }}>
                    <div className="light-text">{props.number}</div>
                    {props.name}
                </h3>
                <p>
                    <a href="https://namu.wiki/w/%EA%B3%A0%EC%8A%A4%ED%8A%B8%20%ED%83%80%EC%9E%85" target="_blank" rel="noopener noreferrer">
                        <span className='gost'>고스트</span>
                    </a>
                    <a href="https://namu.wiki/w/%EB%8F%85%20%ED%83%80%EC%9E%85" target="_blank" rel="noopener noreferrer">
                        <span className='poison'>독</span>
                    </a>
                </p>
                {isExplanationVisible && (
                    <div className="explanation">{props.explanation}</div>
                )}
            </div>
        </div>
    );
};

export default PokemonCard;
