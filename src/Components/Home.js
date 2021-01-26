import {React, useState,useEffect} from 'react';
//import GameCard from './GameCard';
import './Home.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Axios from 'axios';
import './GameCard.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import Game from './Game'
import { motion } from "framer-motion"

export const Home = () => {

    var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3
  };
    
    const [games, setGames] = useState([]);
/*
    const getGames = () => {
        Axios.get('http://localhost:4000/api/games').then((res) =>{
        setGames(res.data);
        })
    }
 
*/

    const getGames = async () => {
    const res = await fetch(`http://localhost:4000/api/games`);
    const data = await res.json();
    setGames(data);
  };

  const deleteGame = async (id) => {
    const userResponse = window.confirm("Are you sure you want to delete it?");
    if (userResponse) {
      const res = await fetch(`http://localhost:4000/api/deleteGame/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      console.log(data);
      await getGames();
      toast.error('Deleted !!!!!')
    }
  };


    useEffect(() => {
    getGames();
  }, []);

  /*const deleteGame = (id) => {
        Axios.delete('http://localhost:4000/api/deleteGame/${id}').then((res) => {
            setGames(
                games.filter((val) => {
                    return val.id != id
                })
            )
        })
    }
    */
    return (
        <Router>
        <div className="container p-4">
        <div className="p-8">
        <h2 className="pb-3">Latest Games</h2>
        <div className="slider">
        <Slider {...settings}>
            {games.map(game => (
                <img src={game.image}  className="slider__img"/>

            ))}
        </Slider>
        </div>
        
        
        <div className="row pt-5">
          {games.map((game) => (
              
              <div className="col-md-4 pb-4" key={game.id}>
              <motion.div initial={{

                  x: 100,

              }}
              animate={{
                  x: 0
                  
              }}
              transition={{
                  duration: 1
              }} >
            <div className="card text-center">
                <div className="card-header bg-dark text-white d-flex justify-content-between">
                    {game.title}
                    <button className="btn btn-danger" onClick={(e) => deleteGame(game.id)} >
                        <i className="far fas fa-trash-alt"></i>
                    </button>
                </div>
                <img src={game.image} alt="" className="card-image-top card__img"/>
                <div className="card-body">
                    <p>{game.description}</p>
                    <Link to='/Games/{{game.id}}'  className="btn btn-info btn-block">EDIT GAME</Link>
                </div>
                
            </div>
            </motion.div>

        </div>
        
          ))}
          
        </div>
        
            
        </div>
        
        <ToastContainer/>
        </div>
        <Switch>
            <Route path='/Games/:id'>
                <Game/>
            </Route>
        </Switch>

        </Router>
    )
}
export default Home;