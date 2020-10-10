const LinkedList = require('./singly-linked-list/LinkedList');

const colleges = new LinkedList();

const collegeNames = [
  'IIT Madras',
  'IIT Pune',
  'IIT Kolkata',
  'IIT Solan',
  'IIT Mandi',
];

collegeNames.map(college => {
  colleges.addToHead(college);
});

colleges.printList();
