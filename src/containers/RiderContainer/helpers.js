export const columns = [{
  Header: 'SLVSH STATS (Click for Stats Key)',
  headerClassName: 'slvsh-stats-header',
  columns: [
    { Header: 'Name',
      accessor: 'name',
      headerClassName: 'column-header'},
    { Header: 'Games Played',
      accessor: 'games_played',
      headerClassName: 'column-header'},          
    { Header: 'Offense',
      accessor: 'Offense',
      headerClassName: 'column-header' },
    { Header: 'Defense',
      accessor: 'Defense',
      headerClassName: 'column-header' }, 
    { Header: 'Difficulty',
      accessor: 'Difficulty',
      headerClassName: 'column-header' },
    { Header: 'Overall',
      accessor: 'Overall',
      headerClassName: 'column-header'}      
  ]
}];
