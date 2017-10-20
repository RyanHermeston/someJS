function smartAssigning(names, statuses, projects, tasks) {
  pairs = []

names.forEach(function(elem,i){
  if(!statuses[i])
  pairs.push({name:names[i],tasks:tasks[i],projects:projects[i]})
})


pairs.sort(function(a,b){

  return (a.tasks<b.tasks) ? -1: (a.tasks>b.tasks) ? 1 : 0
})
  return pairs[0].name
}
