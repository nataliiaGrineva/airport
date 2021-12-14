export const localTime = (timeStr) => {
  const date = new Date(timeStr);
  let h = date.getHours();
  let m = date.getMinutes();
  h = h.toString().length === 1 ? `0${h}` : h;
  m = m.toString().length === 1 ? `0${m}` : m;
  return `${h}:${m}`;
};

export const formats = {
  serverDate: 'SERVER_DATE',
  fullMonth: 'FULL_MONTH',
}

export const formatDate = (date, format) => {
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();

  return format === formats.serverDate ? `${day}-${month}-${year}` : `${day}/${month}`;
}
