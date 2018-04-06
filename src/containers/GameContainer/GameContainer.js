import React, { Component } from 'react';
import './GameContainer.js';
import { connect } from 'react-redux';
import { addGamesToStore } from '../../actions';
import { getGames } from '../../fetches/get-games';

export class GameContainer extends Component {

  async componentDidMount() {
    const games = await getGames();
    this.props.addGamesToStore(games);
  }

  render() {
    console.log(this.props)
    return (
      <div className='game-container'>
        I'm a Game Container
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  games: state.games
})

export const mapDispatchToProps = (dispatch) => ({
  addGamesToStore: (games) => dispatch(addGamesToStore(games))
})

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer)