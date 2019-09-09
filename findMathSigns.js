
// Code to solve tasks where numbers are given and correct equation is searched

/// potential math signs
const mathSigns = ['+', '-', '/', '*']

// Given values
const numbers = [1,2,3,4]
const solution = 9

// Search solution
const equationSolver = (numbers,textSigns) => {
    let eq = '';
    for(var i=0; i<numbers.length; ++i){
        if(i === numbers.length-1){
            return eq += numbers[i].toString()
        }
        eq += numbers[i].toString()+textSigns[i]
    }
}

// number of for loops is the number of potential inserts of math signs.
for(var i=0; i<numbers.length; ++i){
    for(var j=0; j<numbers.length; ++j){
        for(var k=0; k<numbers.length; ++k){
                const signs = [mathSigns[i], mathSigns[j], mathSigns[k]]
                const equation = equationSolver(numbers, signs);
                const result = eval(equation)
                if(result === solution) console.log('Eq is: ', equation, ' === ', solution, ' - check: ', result === solution)
        }
    }
}
