import React, { useState } from 'react';

const PokemonCard = (props) => {
    const [isExplanationVisible, setIsExplanationVisible] = useState(false);

    const toggleExplanation = () => {
        setIsExplanationVisible(prevState => !prevState);
    };

    return (
        <div className="pokemon-card">
            <a href={`https://pokemon.fandom.com/ko/wiki/${props.name}_(%ED%8F%AC%EC%BC%93%EB%AA%AC)`} target="_blank" rel="noopener noreferrer">
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
