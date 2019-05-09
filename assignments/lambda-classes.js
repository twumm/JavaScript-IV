// CODE here for your Lambda Classes

// Base class
class Person {
  constructor(props) {
    this.name = props.name;
    this.age = props.age;
    this.location = props.location;
    this.gender = props.gender;
  }

  speak() {
    console.log(`Hello my name is ${this.name}, I am from ${this.Bedrock}.`)
  }
}

class Instructor extends Person {
  constructor(props){
    super(props);
    this.specialty = props.specialty;
    this.favLanguage = props.favLanguage;
    this.catchPhrase = props.catchPhrase;
  }

  demo(subject) {
    console.log(`Today we are learning about ${subject}`)
  }

  grade(student, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}`)
  }

  addOrSubtractPoint(student) {
    let point = Math.floor(Math.random() * 5) + 1;
    student.grade < 70 ? student.grade = student.grade + point
    : student.grade = student.grade - point;
    console.log(`Grade of ${student.name} is now at ${student.grade}`);
  }
}

class Student extends Person {
  constructor(props) {
    super(props);
    this.previousBackground = props.previousBackground;
    this.className = props.className;
    this.favSubjects = props.favSubjects;
    this.grade = Math.floor(Math.random() * 100) + 1;
  }

  listsSubjects() {
    console.log(`Favourite subjects of ${this.name} - `)
    this.favSubjects.forEach(subject => {
      console.log(subject);
    });
  }

  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}`);
  }

  sprintChallenge(subject) {
    console.log(`${this.name} has begun sprint challenge on ${subject}`);
  }
}

class ProjectManager extends Instructor {
  constructor(props) {
    super(props);
    this.gradClassName = props.gradClassName;
    this.favInstructor = props.favInstructor;
  }

  standUp(channel) {
    console.log(`${this.name} announces to ${channel}, @channel standy times!`);
  }

  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
  }
}

// Create 2 objects each for each class

const studentA = new Student({
  name: "Soho",
  age: 24,
  location: "Pigfarm",
  gender: "M",
  previousBackground: "Business",
  className: "WEBEU2",
  favSubjects: ["HTML", "CSS", "JavaScript", "React", "MongoDB"]
});

const studentB = new Student({
  name: "Mono",
  age: 33,
  location: "MonoChrome",
  gender: "F",
  previousBackground: "Odd",
  className: "WEBEU2",
  favSubjects: ["HTML", "CSS", "MongoDB"]
});

// Instructor Class Object
const instructorA = new Instructor({
  name: "Gabe",
  age: 36,
  location: "Spain",
  gender: "M",
  specialty: "React",
  favLanguage: "JavaScript",
  catchPhrase: "Boooom"
});

const instructorB = new Instructor({
  name: "Jane",
  age: 30,
  location: "Ireland",
  gender: "F",
  specialty: "CSS",
  favLanguage: "JavaScript",
  catchPhrase: "Show up and go up!"
});

// Project Manager Class Object
const projectManagerA = new ProjectManager({
  name: "Anthony",
  age: 29,
  location: "Netherland",
  gender: "M",
  specialty: "JavaScript",
  favLanguage: "JavaScript",
  catchPhrase: "You seem to take to it like a fish in water!",
  gradClassName: "WEBEU2",
  favInstructor: "Gabe"
});

const projectManagerB = new ProjectManager({
  name: "Olivia",
  age: 28,
  location: "Spain",
  gender: "F",
  specialty: "React",
  favLanguage: "JavaScript",
  catchPhrase: "Great!",
  gradClassName: "WEBEU2",
  favInstructor: "Gabe"
});