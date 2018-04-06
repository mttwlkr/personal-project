export const getGames = async () => {
  try {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";    
    const url = "slvsh.com/posts.json?page=1&is_active=true";
    const response = await fetch(proxyurl + url)
    const games = await response.json()
    return games
  } catch (error) {
    throw await error 
  }    
}