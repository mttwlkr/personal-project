import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getRiders } from '../../fetches/get-riders';
import { addRidersToStore, addStatsToStore } from '../../actions';
import RiderCard from '../../components/RiderCard/RiderCard.js';
import { riderStatsObject } from '../../stats/rider-stats-object';
import './RiderContainer.css';
import StatContainer from '../../components/StatContainer/StatContainer.js'

export class RiderContainer extends Component {

  async componentDidMount() {
    const riders = await getRiders();
    this.props.addRidersToStore(riders);
    this.props.addStatsToStore(riderStatsObject);
  }

  render() {
    const { riders } = this.props;
    let displayRiders = 'Riders loading...';
    let topRiders = riders.length ? <StatContainer /> : 'Top Riders loading...'

    if (riders.length) {
      displayRiders = riders.map((rider, idx) => {
        return <RiderCard rider={rider} key={rider.id} />
      })
    }

    return (
      <div>
        <section className='stat-container'>
          {topRiders}
        </section>
        <section className='rider-container'>
          {displayRiders}
        </section>
      </div>
    )
  }
}

export const mapStateToProps = ({riders}) => ({
  riders
})

export const mapDispatchToProps = (dispatch) => ({
  addRidersToStore: (riders) => dispatch(addRidersToStore(riders)),
  addStatsToStore: (riderStatsObject) => dispatch(addStatsToStore(riderStatsObject))
})

export default connect(mapStateToProps, mapDispatchToProps)(RiderContainer)
