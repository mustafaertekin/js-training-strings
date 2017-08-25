/**
* Util Functions for questions
*/
/*
var numberOfFailed = 0;
var numberOfPassed = 0;

function getTestName(name){
  return name.replace(/([^A-Z])([A-Z])/g, '$1 $2').replace('test', '');
}
function report(){
  console.log(`Total ${numberOfFailed+numberOfPassed} tests are run!`);
  console.log(`Failed tests: ${numberOfFailed}`);
  console.log(`Passed tests: ${numberOfPassed}`);
}

function check(left, right){
  var testName = getTestName(arguments.callee.caller.name);
  try{
    chai.assert.equal(left, right);
    numberOfPassed++;
    console.log('%c '+testName+': PASSED', 'color:#00ff00');
  }catch(error){
    console.log('%c '+testName+': FAILED', 'color:#ff0000');
    numberOfFailed++;
  }
}
*/

var numberOfFailed = 0;
var numberOfPassed = 0;

function check(left, right){
  try{
    chai.assert.equal(left, right);
  }catch(error){
    console.log('%c VALUE IS CHANGED', 'color:#0000ff');
  }
}

function isEqual(left, right){
  try{
    chai.assert.equal(left, right);
    numberOfPassed++;
    console.log('%cPASSED', 'color:#00ff00');
  }catch(error){
    console.error('FAILED', error.stack);
    numberOfFailed++;
  }
}

function report(){
  console.log(`Total ${numberOfFailed+numberOfPassed} tests are run!`);
  console.log(`Failed tests: ${numberOfFailed}`);
  console.log(`Passed tests: ${numberOfPassed}`);
  
  var main = document.getElementById("report");
  main.innerHTML = `Total ${numberOfFailed+numberOfPassed} tests are run! <br>` 
                  + `Failed tests: ${numberOfFailed} <br>`
                  + `Passed tests: ${numberOfPassed} <br>`;
}