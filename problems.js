const HashMap = require('./hashmap');

function main() {
  let items = new HashMap();

  items.set('Hobbit', 'Bilbo');
  items.set('Hobbit', 'Frodo');
  items.set('Wizard', 'Gandalf');
  items.set('Human', 'Aragorn');
  items.set('Elf', 'Legolas');
  items.set('Maiar', 'The Necromancer');
  items.set('Maiar', 'Sauron');
  items.set('RingBearer', 'Gollum');
  items.set('LadyOfLight', 'Galadriel');
  items.set('HalfElven', 'Arwen');
  items.set('Ent', 'Treebeard');
  return items; 
}

console.log(main());


// PROBLEM 1

// It looks like setting a new value on the same key overwrites the previous value, like in an object
// The capacity is now at 24 since I hit the 50% threshold when adding items

// PROBLEM 2

// This function appears to be illustrating that keys can be overwritten, and is storing the overwritten key in a different hashmap?
