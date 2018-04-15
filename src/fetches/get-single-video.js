export const getSingleVideo = async (gameID) => {
  try {
    const proxyurl = "https://cors-anywhere.herokuapp.com/"; 
    const response = await fetch(`${proxyurl}slvsh.com/${gameID}.json`)
    const game = await response.json()
    return game
  } catch (error) {
    throw error
  }
}
