import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import React,{useState,useEffect} from 'react';
import Schools from "./data.json";

function App() {
 
  return (
    <>
      <div className="slide" id='home'>
          <Header />
          <div className="container">
            <div className="wrapper">
              <div className="logo-info">
                Image
                <div className="date">
                  du 15/05 au 30/05 <span>2023</span>
                </div>
              </div>
              <div id="jumbotron">
                <div className="contain">
                  <h1 className="title">PROJECT PORTAIL</h1>
                  <h2>EPSE</h2>
                  <div className="texte">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, perspiciatis.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, perspiciatis.</p>
                  </div>
                  <a className="btn blue" href="#society"> Voir les sociétés </a>
                </div>
              </div>
            </div>
          </div>
      </div>
      <div className="slide" id="societys">
        <div className="wrapper">
          <h2>Nos sociétés</h2>
          <div id="mysocietys">
            {Schools.schools.map((item)=>(
               <div className="cards">
               <img src="" alt="image" />
               <div className="infos">
                 <h3>{item.name}</h3>
                 <p>{item.addresse}</p>
                 <p>Téléphone : {item.telephone}</p>
                 <p>Mail: {item.mail}</p>
                 <p>Site Web : <a href={item.site} target="_blank" rel="noopener noreferrer">{item.site}</a></p>
                 <Link key={item.id} to={"school/"+item.name} className="button"> En savoir plus</Link>
               </div>
             </div>
            ))}
           
          </div>
        </div>
      </div>
      
      <Footer></Footer>
    </>
  );
}

export default App;
