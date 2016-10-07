// ---------------------------
// The Arrays You Will Work With
// ---------------------------
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var strings = ['this','is','a','collection','of','words'];
var instructors = [
    { firstname : 'JD', teaches : 'JavaScript'},
    { firstname : 'Tim', teaches : 'JavaScript'},
    { firstname : 'Brit', teaches : 'Ruby'},
    { firstname : 'Joe', teaches : 'iOS'},
    { firstname : 'Jake', teaches : 'JavaScript'},
    { firstname : 'Will', teaches : 'JavaScript'},
    { firstname : 'Calvin', teaches : 'JavaScript'},
    { firstname : 'James', teaches : 'Ruby'}
];

for(initializer; exit-condition; final-expression) {
  // code to run
}

// ---------------------------
// 1. Find largest number
// ---------------------------

var array = [1,12,4,18,9,7,11,3,101,5,6];
var largest= 0;

for (i=0; i<=largest;i++){
    if (array[i]>largest) {
        var largest=array[i];
    }
}



// ---------------------------
// 2. Find longest string
// ---------------------------

var string = ['this','is','a','collection','of','words'];

var longest=[0];

for (longest in string) {string.length; console.log(0)}

var string = ['this','is','a','collection','of','words'];

var longest=[0];

for (longest in string) {string.length; }console.log(longest);

// ---------------------------
// 3. Find even numbers
// ---------------------------
// ---------------------------
  var counter = 0;
  var line = [];
  for (var i = 2; i <= 100; i += 2) {
    line[counter] = i;
    counter++;
    if (line.length == 5) {
      console.log(line);
      counter = 0;
      line = [];
    }
  }

// ---------------------------
// 4. Find odd numbers
// ---------------------------
// ---------------------------
var numbers = [1,12,4,18,9,7,11,3,101,5,6];


for (var i = 1; i <= 101; i += 2) {
  if (numbers.length == 5) {
    console.log(numbers);
    line=[];
  }
  numbers.push(i);
}
console.log(numbers);

// ---------------------------
// 5. Find words that contain `is`
// ---------------------------



// ---------------------------
// 5. Join Both Arrays Together
// ---------------------------




// ---------------------------
// 6. Use the Instructors array and find all that teach JavaScript, 
//    then sort them alphabetically
// ---------------------------