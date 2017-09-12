var inquirer = require("inquirer");

function ClozeCard (part, cloze, full, err) {
   if (err) {
       console.log (err);
   } else
    this.partText = " ..." + part;
    this.cloze = cloze;
    this.fullText = cloze +" "+ part;
}

inquirer.prompt ([
    {
        name: "part" ,
        message: "Enter the partial text for Cloze Card."
    }, {
        name: "cloze",
        message: "Enter text that is omitted."
    }
]).then(function(ans) {
    var full = ans.cloze + " " + ans.part;
    var newCloze = new ClozeCard(ans.part, ans.cloze, full);
    newCloze.print ();
});

ClozeCard.prototype.print = function() {
console.log("Full Text: " + this.fullText);
console.log("Partial Text: " + this.partText);
console.log("Clozed/Omitted Text: " + this.cloze)

}

module.exports = ClozeCard; 