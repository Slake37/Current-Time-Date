let minutes = document.querySelector('.minutes');
let seconds = document.querySelector('.seconds');
let hours = document.querySelector('.hour');
let day = document.querySelector('.day');
let month = document.querySelector('.month');
let year = document.querySelector('.year');
let greet = document.querySelector('.greet')




let today = new Date();
let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
console.log(time);

function greetMe(){
    if(today.getHours()<12){
        greet.innerHTML = 'Good Morning'
    }else if(today.getHours()<12 &&today.getHours()<17){
        greet.innerHTML = 'Good Afternoon'
    }else{
        greet.innerHTML = 'Good Evening'
    }
}


function timeChange(){
   if(today.getHours()<10){
       hours.innerHTML = '0'+today.getHours()+':';
   }else{
   hours.innerHTML= today.getHours()+':';
    };
   if(today.getMinutes()<10){
       minutes.innerHTML = '0'+today.getMinutes()+':'
   }else{
        minutes.innerHTML = today.getMinutes()+':';
    };
   if(today.getSeconds()<10){
       seconds.innerHTML = '0'+today.getSeconds
   }else{
   seconds.innerHTML = today.getSeconds()}
}

function dateChange(){
    day.innerHTML=today.getDate();
    switch(today.getMonth()){
        case 0:
            month.innerHTML = 'January';
            break;
        case 1:
            month.innerHTML = 'February';
            break;
        case 2:
            month.innerHTML = 'March';
            break;
        case 3:
            month.innerHTML = 'April';
            break;
        case 4:
            month.innerHTML = 'May';
            break;
        case 5:
            month.innerHTML = 'June';
            break;
        case 6:
            month.innerHTML = 'July';
            break;
        case 7:
            month.innerHTML = 'August';
            break;
        case 8:
            month.innerHTML = 'September';
            break;
        case 9:
            month.innerHTML = 'October';
            break;
        case 10:
            month.innerHTML = 'November';
            break;
        case 11:
            month.innerHTML = 'December';
    }
    year.innerHTML = today.getFullYear();
}


greetMe();
dateChange();
timeChange();
setInterval(timeChange,1000);


