function addBusinessTime(holiday, time, duration) {
    
    var result = new Date(time.getTime() + (duration*1000));
    if(result >= holiday.start && result <= holiday.end){
     	let tmp1;
       	if(duration < 0){
       		tmp1 = new Date(holiday.start.getTime());
       	}else{
       		tmp1 = new Date(holiday.end.getTime());
       	}
       	let secondH = tmp1.getHours()*60*60 + tmp1.getMinutes()*60 + tmp1.getSeconds();
       	let secondT = result.getHours()*60*60 + result.getMinutes()*60 + result.getSeconds();
       	if(secondT > secondH && duration > 0){
        	tmp1.setHours(result.getHours());
        	tmp1.setMinutes(result.getMinutes());
        	tmp1.setSeconds(result.getSeconds());
       		result = tmp1;
       	}else{
         	result = new Date(tmp1.getTime() + (duration*1000));
       	}
    }
   return result;
}

// Christmas 2019, 9pm Dec 24th to 9pm Dec 25th
const holiday = {
  start: new Date('2019-12-24T21:00:00'),
  end: new Date('2019-12-25T21:00:00')
};

console.log(addBusinessTime(holiday, new Date('2019-12-01T00:00:00'), 60 * 60)); // returns 2019-12-01T01:00:00
console.log(addBusinessTime(holiday, new Date('2019-12-24T21:00:00'), 1)); // returns 2019-12-25T21:00:01
console.log(addBusinessTime(holiday, new Date('2019-12-24T20:30:00'), 60 * 60)); // returns 2019-12-25T21:30:00
console.log(addBusinessTime(holiday, new Date('2019-12-25T00:00:00'), 1)); // returns 2019-12-25T21:00:01
console.log(addBusinessTime(holiday, new Date('2019-12-25T00:00:00'), -1)); // returns 2019-12-24T20:59:59
