
const array1 = [34, 31, 34, 77, 82]
const array2 = [22, 101, 102, 101, 102, 525, 88]
const array3 = [66]
const array4 = [14, 14, 2342, 2342, 2342]
const array5 = [1, 2, 3, 2, 3, 4 , 5, 6 , 6, 6, 8]

function MostPopularNumber(array) {
    
  for(var i=0;i<array.length;i++) {
    var count = 0
    for(var j=0;j<array.length;j++) {
            
        if(array[i]===array[j]) {
            
          var element = array[i] = array[j] 
          count++
          
        }
        
    }
    if(count>1) {
      array[i++] = 
      console.log(`${element} repete ${count} vezes`)  
    }
    if(array.length === 1) {

      console.log(`${element} aparece só ${count} vez`)  
    }
    
   }
   console.log('---------')
}


MostPopularNumber(array1)
MostPopularNumber(array2)
MostPopularNumber(array3)
MostPopularNumber(array4)
MostPopularNumber(array5)


