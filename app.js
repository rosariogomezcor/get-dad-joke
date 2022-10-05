const jokes = document.querySelector("#jokes"); 
const button = document.querySelector('button'); 

const addNewJoke = async () => {
  const jokeText = await getDadJoke(); 
  const newLi = document.createElement('li'); 
  newLi.append(jokeText); 
  jokes.append(newLi); 
}
  const getDadJoke = async () => {
    try {
      const config = { headers: {Accept: 'application/json'} }
      const res = await axios.get("https://icanhazdadjoke.com/", config)
      return res.data.joke; 
    } catch (e) {      
      console.log("Error: ", e); 
      return "No jokes available! Sorry..."; 
    }
  }

  button.addEventListener('click', addNewJoke); 