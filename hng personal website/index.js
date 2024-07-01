// javascript function to display the current time
function currentTime() {
  const TimeElement = document.getElementById("time");
  const now = new Date();

  const hours = String(now.getUTCHours()).padStart(2, "0");
  const minutes = String(now.getUTCMinutes()).padStart(2, "0");
  const seconds = String(now.getUTCSeconds()).padStart(2, "0");

  const TimeUTC = `Current Time in UTC: ${hours}:${minutes}:${seconds}`;
  TimeElement.textContent = TimeUTC;
}

currentTime();
setInterval(currentTime, 1000);

// javascript function to display the current day
function currentDay() {
  const DayElement = document.getElementById("day");
  const now = new Date();
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const day = daysOfWeek[now.getDay()];
  const DayNow = `Current Day: ${day}`;
  DayElement.textContent = DayNow;
}

currentDay();

//for the mini carousel
const carouselInner = document.querySelector(".about_me_carousel_inner");
const Prev = document.querySelector(".carousel-control-prev");
const Next = document.querySelector(".carousel-control-next");

const carouselItems = document.querySelectorAll(".carousel-item");

let currentIndex = 0;

Prev.addEventListener("click", () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = carouselItems.length - 1;
  }
  carouselInner.scrollTo({
    left: currentIndex * carouselInner.offsetWidth,
    behavior: "smooth",
  });
});

function updateIndex(index) {
  currentIndex = index;
  carouselInner.scrollTo({
    left: currentIndex * carouselInner.offsetWidth,
    behavior: "smooth",
  });
}

Next.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex >= carouselItems.length) {
    currentIndex = 0;
  }
  carouselInner.scrollTo({
    left: currentIndex * carouselInner.offsetWidth,
    behavior: "smooth",
  });
});

updateIndex(0);
