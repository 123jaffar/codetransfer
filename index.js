1.// Write a function that takes two parameters, an array of numbers and a target number.
 //The function should return a pair of numbers from the array that adds up to the target number. 
 //If no such pair is found, the function should return null.
   
  // Example input: findPair([1, 2, 3, 4], 5)  


  
   //2. Write a function that takes a string as input and returns the reverse of the string.
   
  // Example input: reverseString("hello")  
 //  Example output: "olleh"
3.// Write a function that takes an array of numbers as input and
// returns the sum of the two largest numbers in the array.

  // Example input: sumLargest([1, 2, 3, 4])  
  // Example output: 7

   var str="jaffar"
    function reverseString(name){
        let newstr=""
        for(let i=str.length-1; i>=0; i-- ){
            newstr+=str[i]

        }
        return newstr
    }

        console.log(reverseString(str))

        var str1="helloworld"
        var str2=""
        
        function reverse(str1){
            for(let i=str1.length-1; i>=0; i--){
                str2+=str1[i]
               
            }
            return str2
        }

        console.log(reverse(str1))
        //Write a function that takes an array of numbers as input and
        // returns the sum of the two largest numbers in the array.

        var numbers=[2,300,5,80,9,140,120,150,20]
          
         

             function sumoflargestNums(numbers){
              let l1=0
              let l2=0
              let sum=0
              let index1=0
              let index2=0
              sum=numbers[0]+numbers[1]

             
           for(var i=0; i<numbers.length; i++){
              
              
            
              for(var j=0; j<numbers.length; j++){
                if(sum<=numbers[i]+numbers[j] && i!=j){
                    sum=numbers[i]+numbers[j]
                    index1=numbers[i]
                    index2=numbers[j]
                    
                    
                }

                }
                
              }
              return {index1,index2,sum}
            }


           

           
           
           console.log(sumoflargestNums(numbers))

           var arrnum=[2,4,5,8,9,12,13,14,20]
           var x=211

             function sumofpair(arrnum,x){
               let num1=0
               let num2=0
               let sum=0
                for(let i=0; i<arrnum.length; i++){
                  
                    for(let j=0; j<arrnum.length; j++){
                        if(arrnum[i]+arrnum[j]==x){
                        num1=arrnum[i]
                        num2=arrnum[j]
                       sum=x

                        }
                        
                    }

                }
                if(x==sum)
                return {num1,num2,x}
                else
                return null
             }
                        console.log(sumofpair(arrnum,x))

                  
                        

  var strarr=["hi", "hello", "hey", "howdy","hashim"]
          
     function filterStrings(strarr){

        let newstr=[]
          for(let i=0; i<strarr.length; i++){
            if(strarr[i].length>3)
            newstr.push(strarr[i])
          }
          return newstr
     }
         
     console.log(filterStrings(strarr))

     var evenarr=[1, 2, 3, 4, 5, 6]
       function filterEvenNums(evenarr){
        let newarr=[]
         for(let i=0; i<evenarr.length; i++){

            if(evenarr[i]%2==0)
            newarr.push(evenarr[i])
         }
         return newarr
       }
            console.log(filterEvenNums(evenarr))

 
   
  var employees=[{ name:"johm", age:30},
  {
    name:"jane", age:25},{
        name:"andrew", age:40
    }]

    


  function valofkey(employees){
   let newarr=[]
    
      
      for(let i=0; i<employees.length; i++){ 
        let val=employees[i].name
        newarr[i]=val


     }
     return newarr
  }

   console.log(valofkey(employees))


   var strp="uajraceecarjau"
   
    function ispallindrome(strp){
      var flag=0
      
      var j=strp.length-1
           for(var i=0; i<=j; i++){
            
         
           if(strp[i]!=strp[j])
           return false
           
            
          
            
            
            j--
         }
         
         return true
         
         
    }

       console.log(ispallindrome(strp)) 
     
     //  console.log(strp.length)


   
//9. Write a function that takes an array of strings as input and returns a new array that contains the length 
//of each string in the original array.
   
//   Example input: stringLengths(["hi", "hello", "hey", "howdy"])  
 


  var arrayofStr=["hi", "hello", "hey", "howdy","yaqoob"]

  function stringLengths(arrayofStr){
     let lofS=[]
      for(var i=0; i<arrayofStr.length; i++)
        lofS.push(arrayofStr[i].length)
        

    return lofS
  }

  console.log(stringLengths(arrayofStr))

   // 8. Write a function that takes a string as input and returns the most frequent character in the string. 
    //If there are multiple characters that appear with the same frequency, return the one that appears first.
   
 //  Example input: mostFrequent("hello world")  
 //  Example output: "l"

  var farr="hello world"

   function mostFrequent(farr){
      let c=[]
      for(var i=0; i<farr.length; i++){

        for(var j=0; j<farr.length; j++){
          if(farr[i]==farr[j] && i!=j){        
          c.push(farr[i])
          break
        }
        }
      }
      return c
   }  
       
   console.log(mostFrequent(farr))

   //  Example output:
   // [2, 5, 3, 5]10. Write a function that takes an array of numbers as input and returns
 // the index of the first number in the array that is greater than or equal to 10.
   
  // Example input: firstGreater([1, 5, 15, 20])  
  // Example output: 2
    
    var arrofFG=[1,15,18,20,10]
     function firstGreater(arrofFG){
      var index=0
      var n=0
        for(var i=0; i<arrofFG.length; i++){
          if(arrofFG[i]>=10){
          
           index= i
           n=arrofFG[i]
           break
          }
           
        }
        return {index,n}
      
     }
     console.log(firstGreater(arrofFG))