def balance_parens(string):
    #creating base list to mutate
    char_list = list(string)
    #creating a stack to push open bracket indexes into for matching
    stack = []
    #looping through list for matching
    for i, char in enumerate(char_list):
        if char == ')':
            #if stack is populated
            if stack:
                # means there is a match so I want to pop the index from stack and continue
                stack.pop()
            #if nothing in stack, no match so replace the unmatch close with nothing
            else:
                char_list[i] = ''
        #if character is an open bracket I want to append to the stack
        elif char == '(':
            stack.append(i)
    #looping over stack, if there are contents, means there are unmatched open brackets
    #so I want to replace them with nothing in the list
    for idx in stack:
        char_list[idx] = ''
    #finally returning the mutated list joined back into a string
    return ''.join(char_list)