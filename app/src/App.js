import React, {useEffect} from 'react';
import './App.css';
import { connect } from "react-redux"; 

import {fetchMissions} from './Actions/action'

function App(props) {
  useEffect(() => {
    props.fetchMissions();

  }, []);

  return (
    <div className="App">
      {props.isLoading && <h4>Loading pictures...</h4>}
      {props.error && (
        <p className="error">ERROR{props.error}</p>
      )}
      {props.animes.length > 0 && (
        <div className='AppContent'>
          <h2>Haruhi!</h2>
          <div className='imgGroup'>
          {props.animes.map(anime => (
            <img src={anime.large} alt='hey'/>
          ))}
          </div>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    name: state.name,
    isLoading: state.isLoading,
    animes: state.animes,
    error: state.error
  };
};
export default connect(mapStateToProps, {fetchMissions})(App);
