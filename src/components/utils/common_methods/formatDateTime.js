const formatDateTime = date => {
  if (date == null) {
    return '-';
  }
  let date1 = new Date(date);
  let day = date1.getDate();
  let month = date1.getMonth() + 1;
  let year = date1
    .getFullYear()
    .toString()
    .substr(-2);
  let hours = date1.getHours();
  let minutes = date1.getMinutes();
  let ampm = hours >= 12 ? 'p' : 'a';
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  var strTime = `${month}.${day}.${year} ${hours}:${minutes}${ampm}`;
  return strTime;
};

export default formatDateTime;
