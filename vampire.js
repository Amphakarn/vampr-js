class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let numberOfVampire = 0;
    let currentVampire = this;

    while (currentVampire.creator) {
      currentVampire = currentVampire.creator;
      numberOfVampire++;
    }
    return numberOfVampire;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    if (this.numberOfVampiresFromOriginal < vampire.numberOfVampiresFromOriginal) {
      return true;
    } else if (vampire.numberOfVampiresFromOriginal === 0) {
      return false;
    } else {
      return false;
    }
  }
  

  /** Tree traversal methods **/

  // Returns the vampire object with that name, or null if no vampire exists with that name
  vampireWithName(name) {
    let vamp = new Vampire("null", 666);
    if (this.name === name) {
      vamp = this;
      //return vamp;
    } else {
      for (let i = 0; i < this.offspring.length; i++) {
        vamp = this.offspring[i].vampireWithName(name);
        if (vamp !== null && vamp.name === name) {
          break;
        }
      }
    }
    if (vamp === null || vamp.name === "null") {
      return null;
    } else {
      return vamp;
    }
  }


  // Returns the total number of vampires that exist
  get totalDescendents() {
    let totalDesc = 0;
    for (let vampyr of this.offspring) {
      totalDesc += vampyr.totalDescendents + 1;
    }
    return totalDesc;
  }


  // Returns an array of all the vampires that were converted after 1980
  get allMillennialVampires() {
    let millennialVampArr = [];
    if (this.yearConverted > 1980) {
      millennialVampArr.push(this);
    }
    for (let vampyr of this.offspring) {
      millennialVampArr = millennialVampArr.concat(vampyr.allMillennialVampires);
    }
    return millennialVampArr;
  }
}

module.exports = Vampire;