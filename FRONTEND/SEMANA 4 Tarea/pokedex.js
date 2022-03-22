const fetchPokemon = (pokeName) => {

    //const pokeName = document.getElementById("pokeName"); //AGARRA EL INPUT DE USER
    const url = 'https://pokeapi.co/api/v2/pokemon/' + pokeName
    fetch(url).then((res) => {
        
        if(res.status != "200"){ //ESTO ES PARA QUE NO TRUENE SI NO ESTA BIEN ESCRITO EL NOMBRE DEL POKEMON, EL 200 ES QUE SI ENCONTRO EL POKEMON
            console.log(res);
            pokeImage("https://c.tenor.com/wJFNVzJdGNAAAAAC/pokemon-jigglypuff.gif");
        }
        else{
            return res.json();
        }        
        
    }).then((data) => {
        console.log(data)
       
       
        pokeImage(data.sprites.other.home.front_default);     
       
        pokeNombre(data.name);

        pokeTipo(data.types);
        
        pokePoleles(data.stats);

        pokeMovimientos(data.moves); 

        pokePeso(data.weight / 10 );

        pokeAltura(data.height / 10 );
        
       
    });
}

const pokeMovimientos = (moves) => {
    const pokeMovimientos = document.getElementById("pokeMovimientos");
    
    let Moves = "";
    moves.forEach(function(move)
    {   Moves += move.move.name + ", "; } );

    pokeMovimientos.innerHTML = Moves;
} 

const pokeTipo = (type) => {
    const pokeTipo = document.getElementById("pokeTipo");
    
    let Tipos = "";
    type.forEach( function(type)
    { Tipos += type.type.name + " ";  } );

    pokeTipo.innerHTML = Tipos;

  
    var body = document.body;
    let clasesBody = body.className; //ESTO SIRVE PARA ELIMINAR CLASES PREVIAS CARGADAS
    if(clasesBody!="")
    {body.classList.remove(clasesBody);}

    body.classList.add(type[0].type.name); //CAMBIA COLOR BACKGROUND DEPENDIENDO TIPO      
    
} 


const pokeImage = (url) => {
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src = url;
} 

const pokeNombre = (pokemonName) => {    
    const pokeNombre = document.getElementById("pokeNombre");
    pokeNombre.innerHTML = pokemonName;
} 

const pokePeso = (pokemonPeso) => {    
    const weight = document.getElementById("weight");
    weight.innerHTML = pokemonPeso + " Kg.";
} 

const pokeAltura = (pokeAltura) => {    
    const height = document.getElementById("height");
    height.innerHTML = pokeAltura + " Mts.";
} 

const pokePoleles = (poderes) => {    

    const pokeHP = document.getElementById("pgHP");
    pokeHP.value = poderes[0].base_stat;
    
    const pokeHPEncabezado = document.getElementById("ebHP");
    pokeHPEncabezado.innerHTML = "HP: " + poderes[0].base_stat;
    
    const pokeAttack = document.getElementById("pgAttack");
    pokeAttack.value = poderes[1].base_stat;

    const pokeAttackEncabezado = document.getElementById("ebAttack");
    pokeAttackEncabezado.innerHTML = "Attack: " + poderes[1].base_stat;
    
    const pokeDefense = document.getElementById("pgDefense");
    pokeDefense.value = poderes[2].base_stat;      

    const pokeDefenseEncabezado = document.getElementById("ebDefense");
    pokeDefenseEncabezado.innerHTML = "Defense: " + poderes[2].base_stat;
    
    const pokeSpecialA= document.getElementById("pgSpecialA");
    pokeSpecialA.value = poderes[3].base_stat;        

    const pokeSAEncabezado = document.getElementById("ebSA");
    pokeSAEncabezado.innerHTML = "S. Attack: " + poderes[3].base_stat;

    const pokeSpecialD= document.getElementById("pgSpecialD");
    pokeSpecialD.value = poderes[4].base_stat;

    const pokeSDEncabezado = document.getElementById("ebSD");
    pokeSDEncabezado.innerHTML = "S. Defense: " + poderes[4].base_stat;

    const pokeSpeed= document.getElementById("pgSpeed");
    pokeSpeed.value = poderes[5].base_stat;    

    const pokeSpeedEncabezado = document.getElementById("ebSpeed");
    pokeSpeedEncabezado.innerHTML = "Speed: " + poderes[5].base_stat;
   
} 


const imprimir = () => {
    const pokeName = document.getElementById("pokeName");
    fetchPokemon(pokeName.value.toLowerCase());
} 

const imprimirRandom = () => {
    let number = Math.floor(Math.random() * (898)) + 1;
    fetchPokemon(number);
} 