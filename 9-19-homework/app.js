function pokemonGame() {
  const arrayOfPokemon = [{
    name: "Bulbasaur",
    damage: 60
  }, {
    name: "Caterpie",
    damage: 40
  }, {
    name: "Charmander",
    damage: 60
  }, {
    name: "Clefairy",
    damage: 50
  }, {
    name: "Jigglypuff",
    damage: 60
  }, {
    name: "Mankey",
    damage: 30
  }, {
    name: "Meowth",
    damage: 60
  }, {
    name: "Nidoran - female",
    damage: 60
  }, {
    name: "Nidoran - male",
    damage: 50
  }, {
    name: "Oddish",
    damage: 40
  }, {
    name: "Pidgey",
    damage: 50
  }, {
    name: "Pikachu",
    damage: 50
  }, {
    name: "Poliwag",
    damage: 50
  }, {
    name: "Psyduck",
    damage: 60
  }, {
    name: "Rattata",
    damage: 30
  }, {
    name: "Squirtle",
    damage: 60
  }, {
    name: "Vulpix",
    damage: 50
  }, {
    name: "Weedle",
    damage: 40
  }];
  let playerScore = 0;
  let pcScore = 0;
  const dealCards = (array) => {

    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    }



    let randomC = getRandomInt(0, array.length);
    let cardsArray = [];

    for (let i = 0; i < 3; i++) {
      let card = 0;
      card = array.splice(randomC, 1);
      cardsArray = cardsArray.concat(card);
    }
    return cardsArray;
  }

  let playerArray = dealCards(arrayOfPokemon);
  let pcArray = dealCards(arrayOfPokemon);

  const dealer = (array) => {
    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    }
    let val = array.splice(getRandomInt(0, array.length), 1);
    return val[0];
  }


  const battle = (player, pc) => {
    for ( let i = 0; i < 3; i++ ) {
      let playerCard = dealer(playerArray);
      console.log(playerCard);
      let pcCard = dealer(pcArray);
      console.log(pcCard);

      if (playerCard.damage > pcCard.damage) {
        console.log('player wins this round!');
        playerScore++;
        console.log('Player Score: ' + playerScore);
        console.log('PC Score ' + pcScore);
      }
        else if (playerCard.damage === pcCard.damage){
        console.log('Tied!');
        playerScore++;
        pcScore++;
        console.log('Player Score: ' + playerScore);
        console.log('PC Score ' + pcScore);

      }
        else {
        console.log('pc wins this round!');
        pcScore++;
        console.log('Player Score: ' + playerScore);
        console.log('PC Score: ' + pcScore);
      }
    }
    if (playerScore > pcScore) {
      console.log('Player Wins This Game!')
    } else {
      console.log('Pc Wins This Game!')
    }
  }
battle(playerArray, pcArray);
}

$(document).ready(function () {

});
$('body').css({'background-image' : 'url("gastly.jpg")'});
$('h1').css({
  'font-size' : '45px',
  'color' : 'yellow',
  'text-align' : 'center',
  'margin' : '50px 0 30px 0'
});
$('h2', 'buttom').css({
  'display' : 'inline'
});
$('button').css({
  'background-color' : 'Transparent',
  'border' : 'none'
})
$('.player').css({
  'font-size' : '30px',
  'color' : 'blue',
  'position' : 'absolute',
  'left' : '250px'
});
$('.pc').css({
  'font-size' : '30px',
  'color' : 'red',
  'position' : 'absolute',
  'right' : '250px'
})
$('.deal').css({
  'font-size' : '25px',
  'color' : 'green',
  'position' : 'absolute',
  'left' : '770px',
  'margin' : '50px 0 0 0'
  //'text-align' : 'center'
})
// $('img').css({
//   'width': '640px',
//   'height' : '640px',
//   'border': '2px solid black'
// })



pokemonGame();


// pass in two arrays. 1 for players , other for pc
// for ( let i = 0; i < 3; i++ ) {
//    if (playerCardDamage > pcCardDamage) {
//    playerScore += 1;
//}  else if(playersCardDamage < pcCardDamage) {pcScore += 1; }
//  } else {
//  playerScore =+1;
// pcScore += 1;
//}
//}
