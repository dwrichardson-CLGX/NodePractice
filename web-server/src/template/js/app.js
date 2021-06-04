console.log('RANDOM LOGGING GOES HERE')
fetch('http://puzzle.mead.io/puzzle').then((response) => {
  response.json().then((data) => {
      console.log(data);
  })
});


