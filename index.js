const LinkedList = require('./singly-linked-list/LinkedList');
const DLinkedList = require('./doubly-linked-list/DoublyLinkedList');

const colleges = new LinkedList();
const family = new DLinkedList();
console.log(family);

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

const familyMembers = [
  'Asha Upadhyay',
  'Babu Boy',
  'Binit Upadhyay',
  'Saket Upadhyay',
];

familyMembers.map(fam => family.addToHead(fam));
family.middleOfList();
family.printList();
family.removeByData('Bidit Upadhyay');
console.log(
  'after removing Bidit Upadhyay from the list, the new list is'
);
family.printList();
