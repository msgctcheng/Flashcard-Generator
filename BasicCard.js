var inquirer = require("inquirer");

function BasicCard (front, back) {
    this.front = front;
    this.back = back;
}

BasicCard.prototype.printInfo = function () {
    console.log("Front: " + this.front + "\nBack: " +  this.back);
}

inquirer.prompt ([
    {
        front: "front" ,
        message: "Enter text for the front of the card."
    }, {
        back: "back",
        message: "Enter text for the back of the card."
    }
]).then(function(answers) {
    var newBasic = new BasicCard(answers.front, answers.back);
    newBasic.printInfo();
})
module.exports = BasicCard;