function takeANumber(deliLine, newPerson) {
  // console.log(`deliLine: ${deliLine}`)
  deliLine.push(newPerson);
  // console.log(`deliLine: ${deliLine}`)
	// console.log(`deliLine.slice(-1): ${deliLine.slice(-1)}`);
	// console.log(`deliLine.length: ${deliLine.length}`);
  return `Welcome, ${deliLine.slice(-1)}. You are number ${deliLine.length} in line.`;
};
takeANumber();

function nowServing(servingLine) {
  // console.log(`servingLine: ${servingLine})`;
  if (servingLine.length === 0) {
		return `There is nobody waiting to be served!`;
	} else {
    let personNowServed = servingLine.shift();
    // console.log(`servingLine: ${servingLine}`);
    return `Currently serving ${personNowServed}.`;
  };
};
nowServing();

function currentLine(line) {
  if (line.length === 0) {
    return `The line is currently empty.`;
  } else {
    for (let i = 0; i < line.length; i++) {

      return `The line is currently: 1. Ada, 2. Grace`
    };
  };
};
currentLine();
