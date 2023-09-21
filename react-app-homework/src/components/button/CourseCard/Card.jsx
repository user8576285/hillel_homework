import React from 'react';
import "./card.css";


function CourceCard({ props }) {

    return (

        <div className={`card ${props.isMyCource ? 'my-cource' : ''}`}>
            <div className="image__container">
                <img src={props.image} alt="" />
                <div className="level">{props.level}</div>
            </div>
            <h3 className="card__title">{props.title}</h3>

            <div className="card__info">
                <div className="user">
                    <img src={props.user.avatar} alt={props.user.name} />
                    <p>{props.user.name}</p>
                </div>
                <div className="rating">
                    <p>{props.rating}</p>
                </div>
            </div>
            {props.isMyCource ? (
                <div className="my-cource-info">
                    <progress value={props.finishedModules} max={props.modules}>
                        {((props.finishedModules / props.modules) * 100).toFixed(0)}%
                    </progress>
                    <div className="card__info">
                        <p>{`${props.finishedModules} / ${props.modules} Modules`}</p>
                        <div>{`${((props.duration / 3600) * 100).toFixed(0)} %`}</div>
                    </div>
                </div>
            ) : (
                <div className="card__info">
                    <div>{`${props.students} Student${props.students !== 1 ? 's' : ''}`}</div>
                    <div>{`${props.modules} Modules`}</div>
                    <div>{`${(props.duration / 3600).toFixed(0)}h ${((props.duration % 3600) / 60)}m`}</div>
                </div>
            )}
        </div>
    );
}

export default CourceCard;

//
