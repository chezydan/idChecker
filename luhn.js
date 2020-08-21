
const generate= document.querySelector("#generate");
const number = document.querySelector('#number');
const control = document.querySelector('#control');

generate.addEventListener('click', ()=>{
    var b =number.value;
    c = luhn(b);
    control.innerHTML=("ספרת הביקורת הינה "+":"+c);
    
} );

function luhn (num){
    const digits = Array.from(num, Number);
//
    var rule= [1,2,1,2,1,2,1,2];
    if (digits.length==8){
        console.log("correct len");
        var total =0;
        console.log(total);
    
        for (var i =0 ; i< digits.length; i++ ){
             if (i % 2 ==0){
                total = total + digits[i];
                
             }   
            else{
                var mult= digits[i]*2;
               // console.log(mult+"m");
                if (mult>9)
                {
                    mult = ((mult %10) +1);  }               
                    total= total + mult;
            }
            
            //console.log(total);
        }        
        
    }
    return (10-total%10)%10;
}