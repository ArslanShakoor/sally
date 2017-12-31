export default data => async () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(data), 1000);
  });
