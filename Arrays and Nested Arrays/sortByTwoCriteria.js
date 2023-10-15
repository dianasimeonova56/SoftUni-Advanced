function sortByTwoCriteria(arr) {
   const twoCriteriaSort = (a, b) => a.length - b.length || a.localeCompare(b);
   arr.sort(twoCriteriaSort);
   console.log(arr.join('\n'))   ;
}
sortByTwoCriteria(['alpha', 'beta', 'gamma']);