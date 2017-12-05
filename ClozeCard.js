var ClozeCard = function (text, cloze) {
    this.full = text;
    this.cloze = cloze;
    this.validCheck = function () {
        if (this.full.includes(this.cloze)) {
            this.partial= this.full.replace(this.cloze, '...');
        } else {
            console.log("an unhelpful error message appears")
        }
    }
    this.validCheck();
}

module.exports = ClozeCard;