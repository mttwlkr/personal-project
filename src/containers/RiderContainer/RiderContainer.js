import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getRiders } from '../../fetches/get-riders';
import { addRidersToStore, addStatsToStore } from '../../actions';
import RiderCard from '../../components/RiderCard/RiderCard.js';
import { riderStatsObject } from '../../stats/rider-stats-object';
import './RiderContainer.css';
// import StatContainer from '../../components/StatContainer/StatContainer.js';
import ReactTable from 'react-table';
import "react-table/react-table.css";
import { columns } from './helpers.js'

export class RiderContainer extends Component {

  async componentDidMount() {
    const riders = await getRiders();
    this.props.addRidersToStore(riders);
    this.props.addStatsToStore(riderStatsObject);
  }

  render() {
    const { riders } = this.props;
    let displayRiders = 'Riders loading...';
    let statsForTable;

    if (riders.length) {
      displayRiders = riders.map((rider, idx) => {
        return <RiderCard rider={rider} key={rider.id} />
      })
      statsForTable = riders.filter(rider => {
        return rider.Offense || rider.Defense
      })
    }

    return (
      <div>
        <section className='stat-container'>
          { riders.length > 0 &&
            <ReactTable
              data={statsForTable}
              columns={columns}
              pageSizeOptions={[5, 10, 20]}
              defaultPageSize={5}
            />
          }
        </section>
        <section className='trick-key-div'>
          <ul className='trick-key'>
            <li><strong><span className='trick-key-li-offense'>Offense:</span></strong> Tricks Called / Tricks Landed</li>
            <li><strong><span className='trick-key-li-defense'>Defense:</span></strong> Tricks Called On / Tricks Landed</li>
            <li><strong><span className='trick-key-li-difficulty'>Difficulty:</span></strong> Tricks Called / Letters Given</li>
            <li><strong><span className='trick-key-li-overall'>Overall:</span></strong> Average of Offense & Defense & Difficulty</li>
          </ul>
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
