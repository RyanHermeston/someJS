function requestMatching(pros, distances, travelPreferences) {
    ms = 0
    nms =  []

    obj = []
for(var i =0;i<pros.length;i++)
    {
        if(distances[i]>travelPreferences[i]){
            nms = distances[i]-travelPreferences[i]
            obj.push({name:pros[i],scoreType:"nms",val:nms})
        }
        else{
            ms = distances[i]
            obj.push({name:pros[i],scoreType:"ms",val:ms})
        }
    }
   obj.sort(function(a,b){
       var name1 = a.name.toUpperCase();
       var name2 = b.name.toUpperCase();
        return(name1<name2) ? -1: (name1>name2) ? 1:0;
    });
 msObj = obj.filter(function(score){
     return score.scoreType == "ms"
 })
msObj.sort(function(a,b){
    var val1 = a.val
    var val2 = b.val
    return(val1<val2) ? -1 : (val1>val2) ? 1 : 0
})
nmsObj = obj.filter(function(score){
    return score.scoreType =="nms"
})
nmsObj.sort(function(a,b){
    var val1 = a.val
    var val2 = b.val
    return(val1<val2) ? -1 : (val1>val2) ? 1 : 0
})

   names = []
    msNames = msObj.map(function(name){
        names.push(name.name)
    })
    nmsNames = nmsObj.map(function(name){
        names.push(name.name)
    })
    //console.log(msNames)
    return names
}
