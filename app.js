// https://raw.githubusercontent.com/pokeAPI/sprites/master/sprites/pokemon/1.png 

const container =document.querySelector("#container"); 

const baseUrl ="https://raw.githubusercontent.com/pokeAPI/sprites/master/sprites/pokemon/"
for (let i = 1; i < 899; i++) {
    
    const num = document.createElement("div"); 
    const label = document.createElement('span');
    label.innerText= `~${i}`;
    const img = document.createElement('img'); 
    img.src=`${baseUrl}${i}.png`; 
    // container.appendChild(img);
    num.appendChild(img); 
    num.appendChild(label); 
    container.appendChild(num);
}
