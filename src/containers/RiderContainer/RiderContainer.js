import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getRiders } from '../../fetches/get-riders';
import { addRidersToStore } from '../../actions';
import RiderCard from '../../components/RiderCard/RiderCard.js';
import { riderStats } from '../../stats/rider-stats';
import './RiderContainer.css'

export class RiderContainer extends Component {

  async componentDidMount() {
    const riders = await getRiders();
    this.props.addRidersToStore(riders);
  }

  getRiderStats(id) {
    
  }

  render() {
    const { riders } = this.props;
    let displayRiders = 'loading';
    
    if (riders.length) {
      displayRiders = riders.map( rider => {
        return <RiderCard rider={rider} key={rider.id} />
      })
    }

    return (
      <section className='rider-container'>
        {displayRiders}
      </section>
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
