const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");


const romanToNum = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

const numberToRoman = (num, rom = "") => {
  debugger;
  if (num === 0) {
    
    return rom;}

  for (var key in romanToNum) {
    if (num >= romanToNum[key]) {
      return numberToRoman(num - romanToNum[key], (rom += key));
    }
  }
};

const checkUserInput = () =>{
    const inputInt = parseInt(numberInput.value);
    if (!numberInput.value) output.textContent = "Please enter a valid number";
    else if (inputInt < 1) output.textContent = "Please enter a number greater than or equal to 1";
    else if (inputInt >= 4000) output.textContent = "Please enter a number less than or equal to 3999";
    else

    output.textContent = numberToRoman(inputInt);
    numberInput.value = "";
}

convertBtn.addEventListener("click", checkUserInput);
numberInput.addEventListener("keydown", (e) =>{
    if (e.key === "Enter") checkUserInput();
})