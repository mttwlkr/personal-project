import React from 'react';
import { connect } from 'react-redux';
import './StatContainer.css';

const StatContainer = (props) => {
  
  const getStats = () => {

    const topOffense = () => props.riders.filter(rider => rider.games_played > 1).sort((a, b) => b.Offense - a.Offense).slice(0, 10) 
    const topDefense = () => props.riders.filter(rider => rider.games_played > 1).sort((a, b) => b.Defense - a.Defense).slice(0, 10)
    const topDifficulty = () => props.riders.filter(rider => rider.games_played > 1).sort((a, b) => b.Difficulty - a.Difficulty).slice(0, 10)
    const topOverall = () => props.riders.filter(rider => rider.games_played > 1).sort((a, b) => b.Overall - a.Overall).slice(0, 10)
    
    const stats = props.riders.reduce((statsObj, rider) => {
      if (rider.games_played > 1) {
        statsObj.topOffense = topOffense()
        statsObj.topDefense = topDefense()
        statsObj.topDifficulty = topDifficulty()
        statsObj.topOverall = topOverall()
      }
      return statsObj
    }, {})
    return stats
  }

  let stats;
  let displayStats;

  if (props.riders[0].Offense) {
    stats = getStats()
  }

  console.log('display stats', displayStats)
  console.log('stats', stats)

  return (
    <div className='table-div'>
      <table>
          <thead>
              <tr>
                  <th>Offense</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td>The table body</td>
                  <td>with two columns</td>
              </tr>
          </tbody>
          <tfoot>
              <tr>
                  <td>The table footer</td>
              </tr>
          </tfoot>
      </table>
    </div>
  )
}

const mapStateToProps = ({riders}) => ({
  riders
})

export default connect(mapStateToProps)(StatContainer);