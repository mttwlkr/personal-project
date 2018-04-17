export const getRiders = async () => {
  try {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";    
    const url = "slvsh.com/riders.json";
    const response = await fetch(proxyurl + url);
    const riders = await response.json();
    return riders;
  } catch (error) {
    throw await error;
  }      
};