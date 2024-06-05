let arr = new Array();

let binsert = document.getElementById("insert");
let bshow = document.getElementById("show");
let p = document.querySelector(".T1 p");

function insertf() {
  let i = t2.valueAsNumber;
  if (i) {
    arr.push(i);
    p.innerHTML = "confirmation message";
  }
  console.log(i);
  console.log(t2);
}
binsert.onclick = function () {
  insertf();
};

function showw() {
  t1.value = arr.join();
}

bshow.onclick = function () {
  showw();
};

function fn() {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      t1.value = arr[i];
      return;
    }
  }
  t1.value = "error message appears";
}

document.querySelector(".T2 .b3").onclick = function () {
  fn();
};

function fnl() {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] < 0) {
      t1.value = arr[i];
      return;
    }
  }
  t1.value = "error message appears";
}

document.querySelector(".T2 .b4").onclick = function () {
  fnl();
};

function sb() {
  let m1 = arr[0],
    m2 = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > m1) {
      m1 = arr[i];
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > m2 && arr[i] != m1) {
      m2 = arr[i];
    }
  }
  t1.value = m2;
}

document.querySelector(".T2 .b5").onclick = function () {
  sb();
};

function n() {
  t1.value = arr[0];
  for (let i = 1; i <= document.querySelector(".b6 span").innerHTML - 1; i++) {
    t1.value += " , " + arr[i];
  }
}

document.querySelector(".T2 .b6").onclick = function () {
  n();
};

function pp() {
  let pr = new Array();
  for (let i = 0; i < arr.length; i++) {
    let flag = 0;
    for (let j = 2; j < arr[i] / 2; j++) {
      if (arr[i] % j == 0) {
        flag++;
      }
    }
    if (flag === 0 && arr[i] != 1) {
      pr.push(arr[i]);
    }
  }
  t1.value = pr.join();
}

document.querySelector(".T2 .b7").onclick = function () {
  pp();
};

function number() {
  let s;
  s=arr.join();
  t1.value = "+20"+ "-"+s.slice(0,3) + "-" + s.slice(3,6)+"-"+s.slice(6); 
}

document.querySelector(".T2 .b8").onclick = function () {
  number(); 
};

function m() {
  let r = "<table border=1>"
  for(let i=0;i<document.querySelector(".b9 .s1").innerHTML ;i++) {
    r+="<tr>";
      for(let j=0;j<document.querySelector(".b9 .s2").innerHTML ;j++) {
        r+="<td style='width:200px; height: 160px;'></td>";
    }
    r+="</tr>"
  }
  r += "</table>"
  document.querySelector(".d3").innerHTML=r;
}
document.querySelector(".b9").onclick = function () {
  m(); 
};