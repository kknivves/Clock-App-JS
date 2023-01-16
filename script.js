//This function runs setClock every 1000ms
setInterval(setClock, 1000);

function setClock() {
  const currentDate = new Date();
  const secondsRatio = currentDate.getSeconds() / 60;
}
