function rollDice(){
    const numOfDice = document.getElementById("numOfDice").value;
    const diceResults = document.getElementById("diceResults");
    const diceImg = document.getElementById("diceImg");
    const values = [];
    const images = [];

    for(let i=0 ; i < numOfDice ; i++){
        const value = Math.floor(Math.random()*6) +1 ;
        values.push(value);
        images.push(`<img src = img/${'d'+value}.png alt ="Dice ${value}">`);
    }

    diceImg.innerHTML = images.join("");
    diceResults.textContent = `Dice : ${values.join(" • ")}`;
    
}

rollDice();