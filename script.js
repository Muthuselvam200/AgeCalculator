function calculate() {
  setInterval(() => {
    let birthdate = new Date(document.getElementById("birthdate").value);
    let now = new Date();
    let ageInMs = now.getTime() - birthdate.getTime();

    let ageInSeconds = Math.floor(ageInMs / 1000);
    let ageInMinutes = Math.floor(ageInSeconds / 60);
    let ageInHours = Math.floor(ageInMinutes / 60);
    let ageInDays = Math.floor(ageInHours / 24);
    let ageInMonths = Math.floor(ageInDays / 30.44);
    let ageInYears = Math.floor(ageInMonths / 12);

    document.querySelector("#years").innerHTML = ageInYears;
    document.querySelector("#months").innerHTML = ageInMonths % 12;
    document.querySelector("#days").innerHTML = ageInDays % 30.44;
    document.querySelector("#hours").innerHTML = ageInHours % 24;
    document.querySelector("#minutes").innerHTML = ageInMinutes % 60;
    document.querySelector("#seconds").innerHTML = ageInSeconds % 60;
  }, 1000);
}

function reset() {
  window.location.reload();
}
