var inquirer = require("inquirer");

function ClozeCard (text, cloze, err) {
   if (err) {
       console.log (err);
   } else
    this.fullText =cloze + part;
    this.partText = " ..." + part;
    this.cloze = cloze;
}

inquirer.prompt ([
    {
        partText: "part" ,
        message: "Enter the partial text for Cloze Card."
    }, {
        cloze: "cloze",
        message: "Enter text that is omitted."
    }
]).then(function(ans) {
    var newCloze = new ClozeCard(ans.cloze, ans.part, ans.cloze);
    newBasic.printInfo();
})

ClozeCard.prototype.create = function () {

}

ClozeCard.prototype.printInfo