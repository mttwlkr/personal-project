export const getGames = async (pageNumber) => {
  try {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";    
    const url = `slvsh.com/posts.json?page=${pageNumber}&is_active=true`;
    const response = await fetch(proxyurl + url)
    const games = await response.json()
    return games
  } catch (error) {
    throw error 
  }    
}