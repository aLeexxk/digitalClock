const getTime = (timezone) => {
  return new Date().toLocaleTimeString("en-US", {
    timeZone: timezone,
    timeStyle: "medium",
    hourCycle: "h12",
  });
};

const showClock = () => {
  const tbilisi = document.getElementById("timeTbilisi");
  const tokyo = document.getElementById("timeTokyo");
  const london = document.getElementById("timeLondon");
  const brasil = document.getElementById("timeBrasil");
  const rome = document.getElementById("timeRome");
  const berlin = document.getElementById("timeBerlin");

  tbilisi.innerHTML = getTime("Asia/Tbilisi");
  tokyo.innerHTML = getTime("Asia/Tokyo");
  london.innerHTML = getTime("Europe/London");
  brasil.innerHTML = getTime("America/Sao_Paulo");
  rome.innerHTML = getTime("Europe/Rome");
  berlin.innerHTML = getTime("Europe/Berlin");
};

setInterval(showClock, 1000);
