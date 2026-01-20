function updateTime() {
  const now = new Date();
  document.getElementById("time").textContent =
    now.toLocaleTimeString() + " " + now.toLocaleDateString();
}

updateTime();
setInterval(updateTime, 1000);
