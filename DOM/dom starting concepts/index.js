document.querySelector("h1").classList.add("huge")
function fibonacciGenerator(n){
    var output=[0, 1];
    
    
    if (n==1){
        output=[0];
    }else if (n==2){
        output=[0,1];
    }else{ 
            
            for( i=2; i<n ; i++ ){ 
                var noe=output.length;
                output.push( output[(noe-2)]+output[(noe-1)])
            }
     }
    
     
    return output;
    
    }
    console.log(output)