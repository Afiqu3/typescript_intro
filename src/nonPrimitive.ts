// array , object

// ts - tuple

let bazarList: string[] = ['Meat', 'Rice'];

// bazarList.push(12);

let mixedArr: (string | number)[] = ['Meat', 2];

mixedArr.push(12);

// let coordinates: [number, number] = [20, 30, 50];

let couple: [string, string] = ['Husband', 'wife'];

let destination: [string, string, number] = ['Dhaka', 'Chattogram', 3];

// reference type : object

// const user: {
//   organization: "Programming Hero";// value => type : literal types
//   firstName: string;
//   middleName?: string; // optional type
//   lastName: string;
//   isMarried: boolean;
// } = {
//   organization: "Programming Hero",
//   firstName: "Jhankar",
//   lastName: "Mahbub",
//   isMarried: true,
// };

// user.organization = "Programming Hero Fire";

// const user: {
//   readonly organization: string; // access modifier
//   firstName: string;
//   middleName?: string; // optional type
//   lastName: string;
//   isMarried: boolean;
// } = {
//   organization: "Programming Hero",
//   firstName: "Jhankar",
//   lastName: "Mahbub",
//   isMarried: true,
// };

// user.organization = "Programming Hero Fire";

interface user {
  readonly organization: string; // access modifier
  firstName: string;
  middleName?: string; // optional type
  lastName: string;
  isMarried: boolean;
}

const user1: user = {
  organization: 'Programming Hero',
  firstName: 'Jhankar',
  lastName: 'Mahbub',
  isMarried: true,
};

const user2: user = {
  organization: 'Programming Hero',
  firstName: 'Jhankar',
  lastName: 'Mahbub',
  isMarried: true,
};


// console.log(user1);
