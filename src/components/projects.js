import React from "react";
import "../styles/myporjects.css";
import Pokedex from "../images/pokedex.png";
import Tic from '../images/tictactoe.png'
import Anime from '../images/anime.png'
import RPS from '../images/rock.png'
function Myporjects() {
  return (
    <div className="myporjects">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 header-projects">
            <p className="header-pro">My Projects</p>
            <div className="header-pro-sub">
              A small gallery of recent projects chosen by me. I've done them
              all together with amazing people from companies. It's only a drop
              in the ocean compared to the entire list. Interested to see some
              more?
            </div>
          </div>
          <div className="projects-section">
            <div className="custom-cards">
              <div className="card-parent">
                <div className="card-holder-bg">
                  <img src={Pokedex} alt="pokedex" />
                </div>
                <div className="overlay">
                  <span>Pokedex</span>
                  <div></div>
                </div>
              </div>
            </div>
            <div className="custom-cards">
              <div className="card-parent">
                <div className="card-holder-bg new-bg">
                  <img src={Tic} alt="tic-tac-toe" />
                </div>
                <div className="overlay">
                  <span>Tic-Tac-Toe</span>
                  <div></div>
                </div>
              </div>
            </div>
            <div className="custom-cards">
              <div className="card-parent">
                <div className="card-holder-bg">
                  <img className="anime" src={Anime} alt="Anime app" />
                </div>
                <div className="overlay">
                  <span>Anime Hunt</span>
                  <div></div>
                </div>
              </div>
            </div>
            <div className="custom-cards">
              <div className="card-parent">
                <div className="card-holder-bg new-bg">
                  <img src={Pokedex} alt="pokedex" />
                </div>
                <div className="overlay">
                  <span>Pokedex</span>
                  <div></div>
                </div>
              </div>
            </div>
            <div className="custom-cards">
              <div className="card-parent">
                <div className="card-holder-bg">
                  <img src={RPS} alt="rock-paper-scissors" />
                </div>
                <div className="overlay">
                  <span>Rock Paper Scissor</span>
                  <div></div>
                </div>
              </div>
            </div>
            <div className="custom-cards">
              <div className="card-parent">
                <div className="card-holder-bg new-bg">
                  <img src={Pokedex} alt="pokedex" />
                </div>
                <div className="overlay">
                  <span>Pokedex</span>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="work-slogan">Work</div>
    </div>
  );
}

export default Myporjects;
