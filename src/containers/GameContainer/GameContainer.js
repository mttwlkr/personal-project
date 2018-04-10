import React, { Component } from 'react';
import './GameContainer.js';
import { connect } from 'react-redux';
import { addGamesToStore } from '../../actions';
import { getGames } from '../../fetches/get-games';
import GameCard from '../../components/GameCard/GameCard.js';
import './GameContainer.css';
import { withRouter } from 'react-router';
import { addVideoToPlayer } from '../../actions';

export class GameContainer extends Component {

  async componentDidMount() {
    const games = await getGames(1);
    this.props.addGamesToStore(games);
  }

  handleRoute = (gameID) => {
    this.props.history.push(`/games/${gameID}`)
    this.props.addVideoToPlayer(gameID)
  }

  handlePageClick = async (e) => {
    const pageNumber = e.target.value
    const games = await getGames(pageNumber);
    this.props.addGamesToStore(games)
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
      <div>
        <section className='game-container'>
          {displayGames}
        </section>
        <div className='page-navigation-button-div'>
          { games.current_page > 1 &&
            <button
              value={games.current_page - 1}
              onClick={this.handlePageClick}
            >{`${games.current_page - 1}`}</button>         
          }
          <button
            value={games.current_page}
            onClick={this.handlePageClick}
          >{`${games.current_page}`}</button>
          { games.current_page < games.total_pages - 2 &&
            <button
              value={games.current_page + 1}
              onClick={this.handlePageClick}
            >{`${games.current_page + 1}`}</button>
          }
          { games.current_page < games.total_pages - 1 &&
            <button
              value={games.total_pages}
              onClick={this.handlePageClick}
            >{`${games.total_pages}`}</button>
          }
        </div>
      </div>
    )
  }
}

export const mapStateToProps = ({games}) => ({
  games
})

export const mapDispatchToProps = (dispatch) => ({
  addGamesToStore: (games) => dispatch(addGamesToStore(games)),
  addVideoToPlayer: (id) => dispatch(addVideoToPlayer(id))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(GameContainer))


