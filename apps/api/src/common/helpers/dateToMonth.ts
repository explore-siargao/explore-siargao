export const dateToMonth = (date:string)=>{
    var dateObj = new Date(date);
    var monthNames = ["January", "February", "March", "April", "May", "June",
                      "July", "August", "September", "October", "November", "December"];
    var monthIndex = dateObj.getMonth();
    var monthName = monthNames[monthIndex];
    
    return monthName;
}