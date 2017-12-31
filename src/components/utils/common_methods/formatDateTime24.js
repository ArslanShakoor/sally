const formatDateTime24 = value => {
  if (value.length < 2) {
    return null;
  }
  let time = value.substr(value.length - 6);
  time = time.split(' ').join('');
  let hours = Number(time.match(/^(\d+)/)[1]);
  let minutes = Number(time.match(/:(\d+)/)[1]);
  let AMPM = time.match(/(.$)/)[1];
  if (AMPM === 'p' && hours < 12) hours = hours + 12;
  if (AMPM === 'a' && hours === 12) hours = hours - 12;
  let sHours = hours.toString();
  let sMinutes = minutes.toString();
  if (hours < 10) sHours = '0' + sHours;
  if (minutes < 10) sMinutes = '0' + sMinutes;

  let date1 = new Date(value.substr(0, 8));
  let day = date1.getDate();
  let month = date1.getMonth() + 1;
  month = (month < 10 ? '0' : '') + month;
  let year = date1.getFullYear();

  return `${year}-${month}-${day}T${sHours}:${sMinutes}:00`;
};

export default formatDateTime24;
