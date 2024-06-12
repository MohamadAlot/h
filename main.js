document.getElementById("btn").addEventListener("click", inputt);

function inputt() {
  // border vales
  let input1 = document.getElementById("input1");
  let input20 = document.getElementById("input2");
  let input30 = document.getElementById("input3");
  let input40 = document.getElementById("input4");

  //   values
  let input = document.getElementById("input1").value;
  let input2 = document.getElementById("input2").value;
  let input3 = document.getElementById("input3").value;
  let input4 = document.getElementById("input4").value;
  // variables
  let answer = 0;
  let output = document.getElementById("output");
  let message = document.getElementById("message");
  if (input.toLowerCase() == "germany") {
    input1.style.borderColor = "green";
    answer++;
  } else {
    input1.style.borderColor = "red";
    answer += 0;
  }
  if (input2.toLowerCase() == "turkey") {
    input20.style.borderColor = "green";
    answer++;
  } else {
    input20.style.borderColor = "red";
    answer += 0;
  }
  if (input3.toLowerCase() == "finland") {
    input30.style.borderColor = "green";
    answer++;
  } else {
    input30.style.borderColor = "red";
    answer += 0;
  }
  if (input4.toLowerCase() == "ireland") {
    input40.style.borderColor = "green";
    answer++;
  } else {
    input40.style.borderColor = "red";
    answer += 0;
  }

  if (answer == 0) {
    output.innerHTML = ` ${answer}/4 (0%)`;
    message.innerHTML = "Imagine getting 0 out of 4 hahahaha";
  } else if (answer == 1) {
    output.innerHTML = `${answer}/4 (25%)`;
    message.innerHTML = "really ????";
  } else if (answer == 2) {
    output.innerHTML = `${answer}/4 (50%)`;
    message.innerHTML = "only 2 right... sad!";
  } else if (answer == 3) {
    output.innerHTML = `${answer}/4 (75%)`;
    message.innerHTML = "3/4 not bad.";
  } else if (answer == 4) {
    output.innerHTML = `${answer}/4 (100%)`;
    message.innerHTML = "Congrats you got all of them right";
  }
}
