let input1 = document.getElementById("q1");
let output1 = document.getElementById("q11");

function dash() {
  let arr = input1.value.split("");
  for (let i = 0; i <= arr.length - 1; i++)
    if (arr[i] % 2 == 0 && arr[i + 1] % 2 == 0) {
      arr[i + 1] = "-" + arr[i + 1];
    }
  output1.value = arr.join("");
}
let input02 = document.getElementById("q02");
let input2 = document.getElementById("q2");
let output2 = document.getElementById("q22");
let show22 = document.getElementById("s2");
let arr2 = new Array();

function insert2() {
  arr2.push(input02.value);
}
function show2() {
  show22.value = arr2;
}
function secondIndexOf() {
  let flag = 0;
  for (let i = 0; i < arr2.length; i++) {
    if (input2.value === arr2[i]) {
      flag++;
    }
    if (flag === 2) {
      output2.value = i;
      return;
    }
  }
}

let input3 = document.getElementById("q3");
let show33 = document.getElementById("s3");
let output3 = document.getElementById("q33");
let arr3 = new Array();

function insert3() {
  arr3.push(input3.value);
}
function show3() {
  show33.value = arr3;
}
function frequent() {
  let flag = 0,
    fflag = arr3[0];
  for (let i = 0; i < arr3.length; i++) {
    let flagt = 0,
      flagf = arr3[i];
    for (let j = i; j < arr3.length; j++) {
      if (arr3[i] === arr3[j]) flagt++;
    }
    if (flagt > flag) {
      flag = flagt;
      fflag = flagf;
    }
  }
  output3.value = fflag + " ( " + flag + " times ) ";
}

let input4 = document.getElementById("q4");
let show44 = document.getElementById("s4");
let output4 = document.getElementById("q44");
let arr4 = new Array();

function insert4() {
  arr4.push(input4.value);
}

function show4() {
  show44.value = arr4;
}

function duplicate() {
  output4.value = [...new Set(arr4)].join();
}

let input05 = document.getElementById("q05");
let input5 = document.getElementById("q5");
let output5 = document.getElementById("q55");
let arr05 = new Array();
let arr5 = new Array();

function insert5() {
  if (input05.value) {
    arr05.push(input05.value);
  }
  if (input5.value) {
    arr5.push(input5.value);
  }
}

function union() {
  let a = arr05 + "," + arr5;
  output5.value = [...new Set(a.split(","))].join();
}

var library = [
  { author: "Bill Gates", title: "The Road Ahead", libraryID: 1254 },
  { author: "Steve Jobs", title: "Walter Isaacson", libraryID: 4264 },
  { author: "Suzanne Collins", title: "Mockingjay", libraryID: 3245 },
];

function sor() {
  for (let i = 0; i < library.length; i++) {
    for (let j = i + 1; j < library.length; j++) {
      if (library[i].title > library[j].title) {
        [library[i], library[j]] = [library[j], library[i]];
      }
    }
  }
  for (let i = 0; i < library.length; i++) {
    document.getElementById(`title${i + 1}`).innerHTML = library[i].title;
    document.getElementById(`author${i + 1}`).innerHTML = library[i].author;
    document.getElementById(`lib${i + 1}`).innerHTML = library[i].libraryID;
  }
  document.getElementById("out").innerHTML = "Output :";
}
