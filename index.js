function takeANumber(deliLine, newPerson) {
  deliLine.push(newPerson);
	console.log(`deliLine: ${deliLine}`);
  return `Welcome, ${deliLine.slice(-1)}. You are number ${deliLine.length} in line.`;
};
takeANumber();

function nowServing(servingLine) {
	if (servingLine.length === 0) {
		return `There is nobody waiting to be served!`;
	} else {
    
  };
};
nowServing();
