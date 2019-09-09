
// Code to solve tasks where numbers are given and correct equation is searched

/// Input - given numbers and potential math signs
const mathSigns = ['+', '-', '/', '*']
const numbers = [1,2,3,4]
const solution = 15

//helpers
const checkResult = ({equation, result, solution}) => {
    if(result === solution) console.log('Eq is: ', equation, ' === ', solution, ' - check: ', result === solution)
}

const calculateEquation = (numbers, signs) => {
    const equation = equationSolver(numbers, signs);
    const result = eval(equation);
    return ({result, equation})
}

const equationSolver = (numbers,textSigns) => {
    let eq = '';
    for(var i=0; i<numbers.length; ++i){
        if(i === numbers.length-1){
            return eq += numbers[i].toString()
        }
        eq += numbers[i].toString()+textSigns[i]
    }
}

/*
###### Recursive Approach. 
###############################
number of for loops is the number of potential inserts of math signs.
*/
for(var i=0; i<numbers.length; ++i){
    for(var j=0; j<numbers.length; ++j){
        for(var k=0; k<numbers.length; ++k){
                const signs = [mathSigns[i], mathSigns[j], mathSigns[k]]
                const {equation, result} = calculateEquation(numbers, signs)
                checkResult({equation, result,solution});
        }
    }
}

/* 
###### Recursive Approach. 
###############################
- signs: array of chosen signs
 - n: amount of potential places for math signs 
*/
const getSign = (signs, n) => {
    if(n === 0) {
        const {equation, result} = calculateEquation(numbers, signs)
        checkResult({equation, result,solution});
        return result
    }
    return mathSigns.map(a => getSign([...signs, a], n-1))
}

getSign([], numbers.length-1)

