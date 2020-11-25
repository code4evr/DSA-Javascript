const LinkedList = require('./singly-linked-list/LinkedList');
const DLinkedList = require('./doubly-linked-list/DoublyLinkedList');
const Queue = require('./Queue/Queue');
const Stack = require('./Stack/Stack');

const colleges = new LinkedList();
const family = new DLinkedList();
const grocery = new Queue();
const pages = new Stack();

/* ************* Singly linked list **************** */

// const collegeNames = [
//   'IIT Madras',
//   'IIT Pune',
//   'IIT Kolkata',
//   'IIT Solan',
//   'IIT Mandi',
// ];

// collegeNames.map(college => {
//   colleges.addToTail(college);
// });

// collegeNames.map(college => {
//   console.log('the colleges are ', colleges);
//   colleges.removeHead();
// });

// colleges.printList();

/* ************* Singly linked list ends **************** */

/* *********** Doubly linked list begins ************** */

// const familyMembers = [
//   'Asha Upadhyay',
//   'Babu Boy',
//   'Binit Upadhyay',
//   'Saket Upadhyay',
// ];

// familyMembers.map(fam => family.addToHead(fam));
// family.middleOfList();
// family.printList();
// family.removeByData('Bidit Upadhyay');
// console.log(
//   'after removing Bidit Upadhyay from the list, the new list is'
// );
// family.printList();

/* *********** Doubly linked list ends ************** */

/* *********** Queue example begins ************** */

// const customers = ['Bidit', 'Binit', 'Saket', 'Babu Billi'];

// customers.map(cus => {
//   grocery.enqueue(cus);
// });

// while (!grocery.isEmpty()) {
//   grocery.dequeue();
// }

/* *********** Queue example ends ************** */

/* ************ Stack example starts *************** */

pages.push('Reading chapter 1');
pages.push('Reading chapter 2');
pages.push('Reading chapter 3');
const topOfStack = pages.peek();
console.log(`The top is ${topOfStack}`);

/* ************ Stack example ends *************** */
