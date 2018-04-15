export const getSingleRider = async (riderID) => {
  try {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = `slvsh.com/riders/${riderID}.json`
    const response = await fetch(proxyurl + url)
    const rider = await response.json()
    return rider
  } catch (error) {
    throw error
  }
}