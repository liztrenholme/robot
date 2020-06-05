import 'whatwg-fetch'

// export const getWeather = () => {
//   fetch('https://accuweatherstefan-skliarovv1.p.rapidapi.com/get24HoursConditionsByLocationKey', {
//     'method': 'POST',
//     'headers': {
//       'x-rapidapi-host': 'AccuWeatherstefan-skliarovV1.p.rapidapi.com',
//       'x-rapidapi-key': '6112d4bb89mshb9cc3fb2805e98dp11598bjsn3998dd5dbdb7',
//       'content-type': 'application/x-www-form-urlencoded'
//     },
//     'body': {
//       'apiKey': '6112d4bb89mshb9cc3fb2805e98dp11598bjsn3998dd5dbdb7',
//       applicationKey: '6112d4bb89mshb9cc3fb2805e98dp11598bjsn3998dd5dbdb7',
//       'locationKey': '44107'
//     }
//   })
//     .then(response => {
//       console.log(response)
//     })
//     .catch(err => {
//       console.log(err)
//     })
// }

export const getWeather = async (location) => {
  const url = 'https://accuweatherstefan-skliarovv1.p.rapidapi.com/searchPostalCode'
  console.log(location)
  let data = {}
  try {
    data = await fetch(url, {
      'method': 'POST',
      'headers': {
        'Content-Type': 'application/json',
        'x-rapidapi-host': 'covid-19-coronavirus-statistics.p.rapidapi.com',
        'x-rapidapi-key': 'ca93407b12msh6207f84fb92a18ep1d6b56jsn4ab719b2e4d0'
      },
      'body': {
        'apiKey': 'ca93407b12msh6207f84fb92a18ep1d6b56jsn4ab719b2e4d0',
        'query': '44107'
      }
    })
      .then(blob => blob.json())
  
    return(data)
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e, 'Error fetching data')
    return(e)
  }
}