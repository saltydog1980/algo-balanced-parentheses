balanceParens = (string) => {
    //splitting input string to have a mutable array
    const charArray = string.split('');
    //creating a stack to push and pop from
    const stack = [];
    //looping over array for matching
    for (let i = 0; i < charArray.length; i++) {
        if (charArray[i] === ')') {
            //as long as there is something in stack meaning there is a matching open
            if (stack.length > 0) {
                //popping off the value in the stack
                stack.pop();
            //if there is no corresponding opening, replce the closing bracket with nothing  
            } else {
                charArray[i] = '';
            }
        //if element is an open bracket I want to push the index into the stack
        } else if (charArray[i] === '(') {
            stack.push(i);
        }
    }
    //looping through stack accounting for any left over non-matching open brackets
    //and replacing them with nothing
    for (let j = 0; j < stack.length; j++) {
        charArray[stack[j]] = ''
    }
    //returning the mutated array joined back into a string
    return charArray.join('')
}
module.exports = { balanceParens }
