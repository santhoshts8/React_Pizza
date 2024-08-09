// let person = {
//   fname: "sahara",
//   lname: "Atarv",
//   greet() {
//     console.log(this.fname, this.lname);
//   },
// };

// console.log(person.greet());
function countChar(str) {
  const ans = {};
  for (const char of str) {
    if (ans.hasOwnProperty(char)) {
      ans[char]++;
    } else {
      ans[char] = 1;
    }
  }
  console.log(ans);
}
console.log(countChar("aabbvvffccrrdhelllo"));
