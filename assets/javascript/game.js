


var characterSelected = false;
var defenderSelected = false;
var character = {};
var defender = {};
var enemiesDefeated = 0;
gameOver = false;

// Characters stats/objects
var kyloRen = {
  name: "Kylo Ren",
  health: 120,
  baseAttack: 20,
  attack: 20
};

var lukeSkywalker = {
  name: "Luke Skywalker",
  health: 100,
  baseAttack: 15,
  attack: 20
};

var rey = {
  name: "Rey",
  health: 150,
  baseAttack: 20,
  attack: 10
};

var yoda = {
  name: "Yoda",
  health: 180,
  baseAttack: 20,
  attack: 10
};

function initializeCharacter(chosenCharacter) {
  character.name = chosenCharacter.name;
  character.health = chosenCharacter.health;
  character.baseAttack = chosenCharacter.baseAttack;
  character.attack = chosenCharacter.attack;
}

function initializeDefender(chosenDefender) {
  defender.name = chosenDefender.name;
  defender.health = chosenDefender.health;
  defender.baseAttack = chosenDefender.baseAttack;
  defender.attack = chosenDefender.attack;
}

// Moves the characters to the enemies section
function moveToEnemies() {
  $(".available-character").removeClass("available-character").addClass("enemy-character");
  $("#enemies-available").append($(".enemy-character"));
}

// Reset the state of the game
function resetGame() {
  // Reset all the health values to the original
  $("#kylo-ren-character").children(".health").html(kyloRen.health);
  $("#luke-skywalker-character").children(".health").html(lukeSkywalker.health);
  $("#rey-character").children(".health").html (rey.health);
  $("#yoda-character").children(".health").html(yoda.health);

  // Reset selected character and enemy-characters
  $(".character-image").removeClass("chosen-character enemy-character defender-character").addClass("available-character");
  var available = $(".available-character").show();
  $("#characters-available").html(available);

  $("#restart").hide();
  $("#cjedi").hide();
  $("#senemy").hide();

  characterSelected = false;
  defenderSelected = false;
  enemiesDefeated = 0;
  gameOver = false;

  character = {};
  defender = {};
}

// Run Javascript when the HTML has finished loading
$(document).ready(function() {

  // Hide the "Restart" button on document load
  $("#restart").hide();

  // Hide the "Your Chosen Jedi" p on document load
  $("#cjedi").hide();

   // Hide the "Choose an enemy" p on document load
   $("#senemy").hide();

  // Determine which character the user has clicked
  $("#kylo-ren-character").on("click", function () {
    console.log("Kylo Ren is selected");

    // User is selecting 
    if(characterSelected == false) {
  

      // Set the user's character
      initializeCharacter(kyloRen
    );
      characterSelected = true;

      // Display the chosen character
      $("#kylo-ren-character").removeClass("available-character").addClass("chosen-character");
      $("#chosen-character").append(this);
      $("#lead").hide();
      $("#cjedi").show();
      $("#senemy").show();

      // Move the remaining characters to the enemies section
      moveToEnemies();
    } else if ((characterSelected == true) && (defenderSelected == false)) {
      // User is choosing the defender
      if($("#kylo-ren-character").hasClass("enemy-character")) {
        $("#lead").hide();

        // Set the user's enemy
        initializeDefender(kyloRen
        );
        defenderSelected = true;

        // Add the character to the defender section
        $("#kylo-ren-character").removeClass("enemy-character").addClass("defender-character");
        $("#defender-section").append(this);
        $("#lead").hide();
      }
    }
  });

  $("#luke-skywalker-character").on("click", function () {
    console.log("Luke Skywalker is selected");

    // User is selecting 
    if(characterSelected == false) {
    

      // Set the user's character
      initializeCharacter(lukeSkywalker);
      characterSelected = true;

      // Display the chosen character
      $("#luke-skywalker-character").removeClass("available-character").addClass("chosen-character");
      $("#chosen-character").append(this);
      $("#lead").hide();
      $("#cjedi").show();
      $("#senemy").show();

      // Move the remaining characters to the enemies section
      moveToEnemies();
    } else if ((characterSelected == true) && (defenderSelected == false)) {
      // User is choosing the defender
      if($("#luke-skywalker-character").hasClass("enemy-character")) {
      

        // Set the user's enemy
        initializeDefender(lukeSkywalker);
        defenderSelected = true;

        // Add the character to the defender section 
        $("#luke-skywalker-character").removeClass("enemy-character").addClass("defender-character");
        $("#defender-section").append(this);
      }
    }
  });

  $("#rey-character").on("click", function () {
    console.log("Rey is selected");

    // User is selecting 
    if(characterSelected == false) {
      

      // Set the user's character
      initializeCharacter(rey);
      characterSelected = true;

      // Display the chosen character
      $("#rey-character").removeClass("available-character").addClass("chosen-character");
      $("#chosen-character").append(this);
      $("#lead").hide();
      $("#cjedi").show();
      $("#senemy").show();

      // Move the remaining characters to the enemies section
      moveToEnemies();
    } else if ((characterSelected == true) && (defenderSelected == false)) {
      // User is choosing the defender
      if($("#rey-character").hasClass("enemy-character")) {
       

        // Set the user's enemy
        initializeDefender (rey);
        defenderSelected = true;

        // Add the character to the defender section 
        $("#rey-character").removeClass("enemy-character").addClass("defender-character");
        $("#defender-section").append(this);
      }
    }
  });

  $("#yoda-character").on("click", function () {
    console.log("Yoda is selected");

    // User is selecting 
    if(characterSelected == false) {
     

      // Set the user's character
      initializeCharacter(yoda);
      characterSelected = true;

      // Display the chosen character
      $("#yoda-character").removeClass("available-character").addClass("chosen-character");
      $("#chosen-character").append(this);
      $("#cjedi").show();
      $("#senemy").show();

      // Move the remaining characters to the enemies section
      moveToEnemies();
    } else if ((characterSelected == true) && (defenderSelected == false)) {
      // User is choosing the defender
      if($("#yoda-character").hasClass("enemy-character")) {
     

        // Set the user's enemy
        initializeDefender(yoda);
        defenderSelected = true;

        // Add the character to the defender section 
        $("#yoda-character").removeClass("enemy-character").addClass("defender-character");
        $("#defender-section").append(this);
      }
    }
  });

  $("#attack").on("click", function() {
    console.log("Attack selected");

    console.log("character = " + JSON.stringify(character));
    console.log("defender = " + JSON.stringify(defender));

    // ready to attack the defender
    if (characterSelected && defenderSelected && !gameOver) {
      // User attacks the defender and decreases the defender's health points
      defender.health = defender.health - character.attack;
      $(".defender-character").children(".health").html(defender.health);
     

      // User's attack power increases
      character.attack = character.attack + character.baseAttack;

      // Counter attack
      if (defender.health > 0) {
        character.health = character.health - defender.baseAttack;
        $(".chosen-character").children(".health").html(character.health);

        // Check if the user survives the attack
        if (character.health > 0) {
  
        } else {
          gameOver = true;
          alert("GAME-OVER! PLAY AGAIN!");
          $("#lead").hide();
          $("#senemy").hide();
          $("#restart").show();
        }
      } else {
        // Defender is defeated
        enemiesDefeated++;
        defenderSelected = false;
        available = true;
        $(".defender-character").hide();

        // Check if the user has won the game
        if (enemiesDefeated === 3) {
          gameOver = true;
         alert("YOU WON!");
         $("#senemy").hide();
          $("#restart").show();
        }
      }
    } else if (!characterSelected && !gameOver) {
      alert("You must first select your game character.");
    } else if (!defenderSelected && !gameOver) {
      alert("You must choose an enemy to fight.");
    }

    console.log("character = " + JSON.stringify(character));
    console.log("defender = " + JSON.stringify(defender));
  });

  $("#restart").on("click", function() {
    console.log("Restart selected");

    resetGame();
  });

}); 