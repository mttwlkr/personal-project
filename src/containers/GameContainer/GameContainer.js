import React, { Component } from 'react';
import './GameContainer.js';
import { connect } from 'react-redux';
import { addGamesToStore } from '../../actions';
import { getGames } from '../../fetches/get-games';
import GameCard from '../../components/GameCard/GameCard.js';
import './GameContainer.css';

export class GameContainer extends Component {

  async componentDidMount() {
    const games = await getGames();
    this.props.addGamesToStore(games);
  }

  render() {
    const { games } = this.props;
    let displayGames = 'loading';

    if (games.posts) {
      displayGames = games.posts.map( game => {
        return <GameCard game={game} key={game.id}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer)


