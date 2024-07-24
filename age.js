function calculate()
{
    let year;
    let month;
    let day;
    let currentday=parseInt(cd.value.slice(8,10), 10);
    let currentmonth=parseInt(cd.value.slice(5,7), 10);
    let currentyear=parseInt(cd.value.slice(0,4), 10);
    console.log('current date:-',currentyear,currentmonth,currentday);
    let birthDay=parseInt(dob.value.slice(8,10), 10);
    let birthmonth=parseInt(dob.value.slice(5,7), 10);
    let birthyear=parseInt(dob.value.slice(0,4), 10);
    console.log('dob:-',birthyear,birthmonth,birthDay);
    
    if(currentday>=birthDay)
    {
        day=currentday-birthDay
    }
    else
    {
       day=currentday + new Date(currentyear,currentmonth).getDate()-birthDay
       currentmonth--
    }
    if(currentmonth>=birthmonth)
    {
        month=currentmonth-birthmonth
    }
    else{
        month=currentmonth + 12 - birthmonth
        currentyear--
    }
    year=currentyear-birthyear
    if(year<0)
    {
        ageText.innerHTML="kya majak kar rahe ho yar,sahi date dalo"
    }
    else{
        ageText.innerHTML=year+"years,"+month+"months,"+day +"days"
    }
}