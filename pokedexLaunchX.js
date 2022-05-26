import * as bootstrap from 'bootstrap';

const pokeImage = (url) =>{
  const pokeImg = document.getElementById("pokeImg");//leee el documento de html y busca el id
  pokeImg.src = url;
}

const fetchPokemon = async() => {
  const pokeName = document.getElementById("pokeName");
  let pokeInput = pokeName.value.toLowerCase();
  const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
  //fetch hace una consulta al servidor con el url que se declaron el la constante url
  // setTimeout(()=>{
    await fetch(url).then((res)=> {   //Se declara la promesa then para recibir una función con la repuesta
      if(res.status !="200"){
        console.log(res);
        pokeImage("./pokemon-sad.gif");
      }
      else{
        return res.json(); //regresas este json
      }      
    }).then((data) => { // regresas la data
      console.log(data);
      data.game_indices.forEach((game) => {
        console.log(game.version.name);
      })
      let values= []
      data.game_indices.map((game) => {
        console.log(game.game_index)
        values.push(game.game_index)
        console.log(values)
      }) 
      let pokeName = data.name;
      let pokeImg = data.sprites.front_default;
      console.log(pokeImg);
      console.log(pokeName);
      pokeImage(pokeImg);
      document.querySelector('#pokeNombre').innerHTML = '<h1>' + pokeName + '</h1>';
    })
  // }, 3000)
}

  pokeConsulta();


fetchPokemon(); //se manda a llamar para que se ejecute en el codigo



//pokeImage("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png");




