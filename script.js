function nameEmail() {
  let name = prompt("What is your name?");
  let email = prompt("What is your email address?");
  let answer = prompt("Do you want to recieve more recipes?");
  if (answer === "yes") {
    alert("Thank you " + name + ", we'll send you more recipes!");
  } else {
    alert("Thank you " + name + ".");
  }
}
let contactButton = document.querySelector("button");
contactButton.addEventListener("click", nameEmail);
