// TODO: Create a constructor function called 'Developer' that takes in 'name' and 'tech'

function Developer(name, tech){
    this.name = name;
    this.tech = tech;
    this.introduction = function(){
        console.log(`Hi ${name}! You Love ${tech}!`)
    }
}

// TODO: Create a new object using the 'Developer' constructor
const dev = new Developer('Joanna', 'Javascript');

// TODO: Call the 'introduction()' method on the new object

dev.introduction();
