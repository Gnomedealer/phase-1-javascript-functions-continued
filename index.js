function saturdayFun(event='roller-skate'){
    return `This Saturday, I want to ${event}!`
}
function mondayWork(location='go to the office'){
    return `This Monday, I will ${location}.`
}
function wrapAdjective(ski='*'){
    return function(character='special'){
        return `You are ${ski}${character}${ski}!`
    }
}
console.log(wrapAdjective()())