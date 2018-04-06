import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getRiders } from '../../fetches/get-riders';
import { addRidersToStore } from '../../actions';

export class RiderContainer extends Component {

  async componentDidMount() {
    const riders = await getRiders();
    this.props.addRidersToStore(riders);
  }

  render() {
    return (
      <div className='rider-container'>
        I'm a rider container
      </div>
    )
  }
}

export const mapStateToProps = ({riders}) => ({
  riders
})

export const mapDispatchToProps = (dispatch) => ({
  addRidersToStore: (riders) => dispatch(addRidersToStore(riders))
})

export default connect(mapStateToProps, mapDispatchToProps)(RiderContainer)
