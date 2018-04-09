import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

class VideoPlayer extends Component {

  // async componentDidMount() {
  //   debugger;
  //   const gameID = this.props.match.params.game
  //   const posts = await this.props.games.posts
  //   const displayGame = posts.find( post => {
  //     return post.id === gameID
  //   })
  //   console.log(displayGame)
  // }

  render() {

    // const { games, match } = this.props;

    return (
      <div>
        <iframe
          width="640" 
          height="360" 
          // src="https://www.youtube.com/embed/b_9xjpVljtM"
          src="https://player.vimeo.com/video/189262515"
          frameBorder="0" 
          allow="autoplay; encrypted-media" 
          allowFullScreen
        ></iframe>
      </div>
    )    
  }
}

export default VideoPlayer

// const mapStateToProps = ({games}) => ({
//   games
// })


// export default withRouter(connect(mapStateToProps)(VideoPlayer));
