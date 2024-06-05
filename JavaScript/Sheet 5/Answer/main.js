let hh = document.getElementsByTagName("h2");

function headd() {
  for (let i = 0; i < hh.length; i++) {
    hh[i].innerHTML = "New Header after Change";
  }
}

let pp = document.getElementsByTagName("p");
function lengthh() {
  p11.innerHTML = pp.length;
}
let input1 = document.getElementById("p1");
let input2 = document.getElementById("p2");
let input3 = document.getElementById("p3");
let arr = new Array();
let Student;

function insert() {
  let con = window.confirm("Do You Want Another Student");
  Student = {
    ID: input1.value,
    Name: input2.value,
    Program: input3.value,
  };
  arr.push(Student);
  if (!con) {
    document.getElementById("i").style.display = "none";
  }
}

function show() {
  document.getElementById("o").value = "";
  for (let i = 0; i < arr.length; i++) {
    document.getElementById("o").value +=
      "ID : " +
      arr[i].ID +
      " , " +
      "Name : " +
      arr[i].Name +
      " , " +
      "Program : " +
      arr[i].Program +
      "\n";
  }
}

function showt() {
  let r = "<table border=1>";
  for (let i = 0; i < arr.length; i++) {
    r += "<tr>";
    for (let j = 0; j < 3; j++) {
      r +=
        "<td style='width:200px; height: 160px; text-align:center; line-height:1 ;font-size: 30px;font-weight: bold;'>";
      switch (j) {
        case 0:
          r += arr[i].ID;
          break;
        case 1:
          r += arr[i].Name;
          break;
        case 2:
          r += arr[i].Program;
          break;
      }
      r += "</td>";
    }
    r += "</tr>";
  }
  r += "</table>";
  document.getElementById("st").innerHTML = r;
}

function validateName(value, name) {
  if (value) {
    return "";
  } else {
    return `${name} is empty\n`;
  }
}
function validateSalary(sal) {
  if (!sal || isNaN(sal)) {
    return "salary Error \n";
  } else {
    if (sal > 3000 && sal < 50000) {
      return "";
    } else {
      return "salary must be >3000 and <50000\n";
    }
  }
}
function validateAge(age) {
  if (!age && isNaN(age)) {
    return "age Error \n";
  } else {
    if (age > 18 && age < 70) {
      return "";
    } else {
      return "age must be >18 and <70\n";
    }
  }
}

function validatePhone(p) {
  if (!p && isNaN(p)) {
    return "phone Error \n";
  } else if (p.length !== 11) {
    return "phone must be 11 digits\n";
  } else if (
    p.slice(0, 3) == "010" ||
    p.slice(0, 3) == "011" ||
    p.slice(0, 3) == "012" ||
    p.slice(0, 3) == "015"
  ) {
    return "";
  } else {
    return "The first 3 numbers must be either : 010, 011, 012, or 015\n";
  }
}

function validate(form) {
  let errors = validateName(form.firstName.value, "First name") || "";
  errors += validateName(form.familyName.value, "Family name");
  errors += validateName(form.department.value, "department");
  errors += validateSalary(form.salary.value);
  errors += validateAge(form.age.value);
  errors += validatePhone(form.phone.value);
  if (errors) {
    alert(errors);
    return false;
  } else {
    return true;
  }
}
