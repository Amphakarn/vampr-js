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

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {

    // console.log("RESULT this.creator = ", this.creator.name)
    console.log("RESULT this = ", this.name)
    // console.log('this.numberOfVampiresFromOriginal: ', this.numberOfVampiresFromOriginal);
    // console.log("RESULT vampire.creator = ", vampire.creator.name)
    console.log("RESULT vampire = ", vampire.name)
    // console.log('vampire.numberOfVampiresFromOriginal: ', vampire.numberOfVampiresFromOriginal);


    if (this.creator.name === vampire.creator.name) {
      // console.log("RESULT this.creator = ", this.creator.name)
      // console.log("RESULT vampire.creator = ", vampire.creator.name)
      if (this.name === vampire.name) {
        return vampire;
      }
      return vampire.creator;
    }
// console.log(this.isMoreSeniorThan(vampire))
    if (this.isMoreSeniorThan(vampire)) {
      let currentVampire = vampire.creator;
      // console.log('currentVampire: ', currentVampire.creator.name)
      // console.log('this.creator.name: ', this.creator.name)
      while (currentVampire.creator.name !== this.creator.name) {
      //   console.log('currentVampire.creator.name = ', currentVampire.creator.name)
        currentVampire = vampire.creator;
        console.log('currentVampire.creator.name = ', currentVampire.creator.name)
      }
      
      return currentVampire.creator.name;
    } 
    // else {
    //   let currentVampire = this;
    //   while (currentVampire.creator.name !== this.creator.name) {
    //     currentVampire = this.creator;
    //   }
    //   return currentVampire.creator.name;
    // }






    // // call isMoreSeniorThan() to check who is more senior between this and the vampire
    // if (isMoreSeniorThan(vampire)) {
    //   let currentVampire = vampire;
    //   while (currentVampire.creator.name !== this.creator.name) {
    //     currentVampire = vampire.creator;
    //   }
    //   return currentVampire.creator.name;
    // } else {
    //   let currentVampire = this;
    //   while (currentVampire.creator.name !== this.creator.name) {
    //     currentVampire = this.creator;
    //   }
    //   return currentVampire.creator.name;
    // }
  }
}


module.exports = Vampire;

