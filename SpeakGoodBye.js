
// STEP 7: Create an object, called 'byeSpeaker' to which you will attach
// the "speak" method and which you will expose to the global context
// See Lecture 52, part 1

(function (window) {
var byeSpeaker ={};
   byeSpeaker.name = "Yaakov";
var speakWord = "Good Bye";

// STEP 8: Rewrite the 'speak' function such that it is attached to the
// byeSpeaker object instead of being a standalone function.
// See Lecture 52, part 2
byeSpeaker.sayHello = function () {
  console.log(speakWord + " " + byeSpeaker.name);
}
  window.byeSpeaker = byeSpeaker;

})(window);

// STEP 9: Expose the 'byeSpeaker' object to the global scope. Name it
// 'byeSpeaker' on the global scope as well.
// xxxx.xxxx = byeSpeaker;

