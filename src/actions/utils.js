// Handle errors from the API.
export const normalizeResponseErrors = res => {
  if(!res.ok) {
    if (
      res.headers.has('content-type') &&
      res.headers.get('content-type').startsWith('application/json')
    ) {
      // JSON error returned by api
      return res.json().then(err => Promise.reject(err));
    }
     // less informative error returned by express
     return Promise.reject({
       code: res.status,
       message: res.statusText
     });
  }
  return res;
}

// Used to convert data from the api into interest categories with associated users
export const formatIntoInterestCategories = data => {
  const resultObj = {};
  const resultArray = [];
  data.forEach(item => {
    if(!resultObj[item.interest]) {
      resultObj[item.interest.name] = [];
    }
    resultObj[item.interest.name].push(item.user);
  });
  for(let interest in resultObj) {
    resultArray.push({interest: interest, users: resultObj[interest]});
  }  
  return resultArray;
}