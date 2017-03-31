var greetingText;

var currentDate = new Date();
var currentHour = currentDate.getHours();

if(currentHour < 12){
  greetingText = "Good morning sunshine!"
}else if(currentHour < 18){
 greetingText = "Good afternoon friend!"
}else{
	greetingText = "Good evening sleepy head!"
}

jQuery("#greeting").text(greetingText);