var ClozeCard = function(text, cloze) {
    this.cloze = cloze;
    this.full = full;
    this.partial = function(){
        if (this.full.includes(this.cloze)) {
            return this.full.replace(this.cloze, '...');
        }
    }
    this.noCloze = function() {
        if (this.cloze === undefined) {
          console.log("try again");
        }
      };
}

  module.exports = ClozeCard;