import React, { Component } from 'react';
import './GameContainer.js';
import { connect } from 'react-redux';
import { addGamesToStore } from '../../actions';
import { getGames } from '../../fetches/get-games';
import GameCard from '../../components/GameCard/GameCard.js';
import './GameContainer.css';
import { withRouter } from 'react-router';

export class GameContainer extends Component {

  async componentDidMount() {
    const games = await getGames();
    this.props.addGamesToStore(games);
  }

  handleRoute = (gameID) => {
    this.props.history.push(`/games/${gameID}`)
    // dispatch an add game to player action
  }

  render() {
    const { games } = this.props;
    let displayGames = 'loading';

    if (games.posts) {
      displayGames = games.posts.map( game => {
        return <GameCard game={game} key={game.id} handleRoute={this.handleRoute}/>
      })    
    }

    return (
      <section className='game-container'>
        {displayGames}
      </section>
    )
  }
}

export const mapStateToProps = ({games}) => ({
  games
})

export const mapDispatchToProps = (dispatch) => ({
  addGamesToStore: (games) => dispatch(addGamesToStore(games))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(GameContainer))


