const Passwordbox = document.getElementById("Password");
const length = 12;

const Uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const Lowercase = "abcdefghijklmnopqrstuvwxyz";
const Numbers = "0123456789";
const symbol = "!@#$%^&*()_+-={}:<>?";
const allChars = Uppercase + Lowercase + Numbers + symbol;
const createPassword = () => {
  let Password = "";
  Password += Uppercase[Math.floor(Math.random() * Uppercase.length)];
  Password += Lowercase[Math.floor(Math.random() * Lowercase.length)];
  Password += Numbers[Math.floor(Math.random() * Numbers.length)];
  Password += symbol[Math.floor(Math.random() * symbol.length)];
  while (length > Password.length) {
    Password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  Passwordbox.value = Password;
};
const copyPass = () => {
  Passwordbox.select();
  document.execCommand("copy");
};
