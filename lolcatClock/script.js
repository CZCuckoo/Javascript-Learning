var time = new Date().getHours();

var message = document.getElementById("timeEvent");
var lolcat = document.getElementById("lolcat");
var messageText;

var partyTimeButton = document.getElementById("partyTimeButton");
var wakeUpTimeSelector =  document.getElementById("wakeUpTimeSelector");
var lunchTimeSelector = document.getElementById("lunchTimeSelector");
var napTimeSelector = document.getElementById("napTimeSelector");

var noon = 12;
var evening = 18;
var wakeuptime;
var lunchtime;
var partyTime;
var naptime;


var updateClock = function()
{
  var image="https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/wakeUpTime.jpg"

  if (time == wakeuptime)
  {
    messageText = "Time to get up!";
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
  }

  else if (time < noon)

  {
    image="https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
    messageText="Good morning!";
  }

  else if (time == lunchtime)
  {
    image="https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
    messageText="Time to eat!";
  }

  else if (time == naptime)
  {
    image="http://i.imgur.com/f1yeHVO.jpg";
    messageText="Nap time!";
  }

  else if (time==partyTime)
  {
    image="https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
    messageText="Party time woohoo!";
  }

  else if (time > evening)
  {
    messageText = "Good evening!";
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
  }


  else
  {
    image="https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
    messageText="Good afternoon!";
  }

  lolcat.src = image;
  message.innerText = messageText;


  var showCurrentTime = function()
  {
      // display the string on the webpage
      var clock = document.getElementById('clock');

      var currentTime = new Date();

      var hours = currentTime.getHours();
      var minutes = currentTime.getMinutes();
      var seconds = currentTime.getSeconds();
      var meridian = "AM";

      // Set hours
      if (hours >= noon)
      {
          meridian = "PM";
      }
      if (hours > noon)
      {
          hours = hours - 12;
      }

      // Set Minutes
      if (minutes < 10)
      {
          minutes = "0" + minutes;
      }

      // Set Seconds
      if (seconds < 10)
      {
          seconds = "0" + seconds;
      }

      // put together the string that displays the time
      var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";

      clock.innerText = clockTime;
  };

  showCurrentTime();

};

var oneSecond = 1000;
setInterval(updateClock, oneSecond);

updateClock();

var partyEvent = function()
{
    if (partyTime < 0)
    {
        partyTime = new Date().getHours();
        partyTimeButton.innerText = "Party Over";
        partyTimeButton.style.background = "#0A8DAB";
    }
    else
    {
        partyTime = -1;
        partyTimeButton.innerText = "PARTY TIME!";
        partyTimeButton.style.background = "#222";
    }
};


partyEvent();


var wakeUpEvent = function()
{
  wakeuptime = wakeUpTimeSelector.value;
  console.log("wake up!")
};

var lunchEvent = function()
{
  lunchtime = lunchTimeSelector.value;
  console.log("Lunch Time!")
};

var napEvent = function()
{
  naptime = napTimeSelector.value;
  console.log("Nap Time!")
};
partyTimeButton.addEventListener("click", partyEvent);
wakeUpTimeSelector.addEventListener('change', wakeUpEvent);
lunchTimeSelector.addEventListener('change', lunchEvent);
napTimeSelector.addEventListener('change', napEvent);
