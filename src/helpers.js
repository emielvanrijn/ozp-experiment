export function getTimeString(timeInMinutes) {
  const hours = Math.floor(timeInMinutes / 60);
  const minutes = timeInMinutes % 60;
  return `${hours <= 9 ? "0" : ""}${hours}:${
    minutes <= 9 ? "0" : ""
  }${minutes}u`;
}
