import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollections";
import { LinkedList } from "./LinkedList";

var numbersCollection = new NumbersCollection([100, 3, -5, 0]);
numbersCollection.sort();

console.log("\n***** Numbers Collection *****");
console.log("Original: [100, 3, -5, 0]");
console.log("Sorted: ", numbersCollection.data);

const charactersCollection = new CharactersCollection("Xaayb");
charactersCollection.sort();

console.log("\n***** Characters Collection *****");
console.log('Original: "Xaayb"');
console.log("Sorted: ", charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
linkedList.sort();

console.log("\n***** Linked List *****");
console.log("Original: 500 -> -10 -> -3 -> 4");
console.log("Sorted:");
linkedList.print();
