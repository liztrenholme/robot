export const getJoke = () => {
  fetch('https://api.base62.io/encode', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ data: 'Hello world!' }),
    mode: 'cors'
  }).then(function(response) {
    if (response.ok) {
      return response.json()
    } else {
      throw new Error('Could not reach the API: ' + response.statusText)
    }
  }).then(function(data) {
    return data
  }).catch(function(error) {
    console.log(error)
  })

//   fetch('https://api.base62.io/decode', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ data: 'T8dgcjRGuYUueWht' }),
//     mode: 'cors'
//   }).then(function(response) {
//     if (response.ok) {
//       return response.json()
//     } else {
//       throw new Error('Could not reach the API: ' + response.statusText)
//     }
//   }).then(function(data) {
//     document.getElementById('decoded').innerHTML = data.decoded
//   }).catch(function(error) {
//     document.getElementById('error').innerHTML = error.message
//   })
}