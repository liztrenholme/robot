export const getWeather = () => {
  fetch('https://accuweatherstefan-skliarovv1.p.rapidapi.com/get24HoursConditionsByLocationKey', {
    'method': 'POST',
    'headers': {
      'x-rapidapi-host': 'AccuWeatherstefan-skliarovV1.p.rapidapi.com',
      'x-rapidapi-key': 'ca93407b12msh6207f84fb92a18ep1d6b56jsn4ab719b2e4d0',
      'content-type': 'application/x-www-form-urlencoded'
    },
    // 'body': {
    //   'apiKey': '6112d4bb89mshb9cc3fb2805e98dp11598bjsn3998dd5dbdb7',
    'locationKey': '44107'
    // }
  })
    .then(response => {
      console.log(response)
    })
    .catch(err => {
      console.log(err)
    })
}