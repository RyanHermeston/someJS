function tasksTypes(deadlines, day) {
low = day+1
high =  day+7
today = deadlines.filter(function(elem){
    return elem <low
})
upcoming = deadlines.filter(function(elem){
    return elem >= low && elem <= high
})
later =deadlines.filter(function(elem){
    return elem > high
})
 return [today.length,upcoming.length,later.length]
}
