const args = process.argv.slice(2);
const pigLatin = function(args) {
  let newString = "";
  for (let i = 0; i < args.length; i++) {
    for (let j = 1; j < args[i].length; j++) {
      newString += args[i][j];
    }
    newString += args[i][0];
    newString += "ay ";
  }
  console.log(newString);
};

pigLatin(args);