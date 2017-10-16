function ratingThreshold(threshold, ratings) {
avg = 0
sum = 0
indecesToReturn = []

for(var i = 0;i<ratings.length;i++){
    for(var j = 0;j<ratings[i].length;j++){
        sum += ratings[i][j];

    }
    avg = sum/(ratings[i].length)
    sum = 0
    if(avg<threshold)
        indecesToReturn.push(i)
    }

return indecesToReturn

}
