export function fetchesData(pathesJSONfiles){
    fetch(pathesJSONfiles)
      .then(response => {if (!response.ok) {
        throw new Error("HTTP error " + response.status);
    }
      return response.json();
   })
   .then(data => {
        return data;
      }
  )
  .catch(err => {
    console.log("Error Reading data " + err);
  });

}

//export let dane = (x) => fetchesData(x);
