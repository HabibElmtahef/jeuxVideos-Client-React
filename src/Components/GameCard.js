import React from 'react';
import './GameCard.css'
import Axios from 'axios'
const GameCard = (props) => {

    const deleteGame = (id) => {
        Axios.delete('http://localhost:4000/api/deleteGame/${id}')
        console.log(props.id)
    }
    return (
        <div className="col-md-4">
            <div className="card text-center">
                <div className="card-header bg-dark text-white d-flex justify-content-between">
                    {props.name}
                    <button className="btn btn-danger" onClick={deleteGame(props.id)} >
                        <i className="far fas fa-trash-alt"></i>
                    </button>
                </div>
                <img src={props.image} alt="" className="card-image-top card__img"/>
                <div className="card-body">
                    <p>{props.desc}</p>
                    <a  className="btn btn-info btn-block">EDIT GAME</a>
                </div>
            </div>

        </div>
    )
}

export default GameCard
