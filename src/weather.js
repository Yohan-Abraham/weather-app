import './style.css';

//returns raw data of location
async function getData(location) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=A72ZE4RZ682RFQY6HMMP76233&contentType=json`,
    );
    const data = await response.json();
    return data;
  } catch {
    console.log('error');
  }
}

//processes data for desired location and returns important data
async function processData(location) {
  //get raw data of location
  const data = await getData(location);
  console.log(data);

  const myLocation = data.address;
  const currentCondition = data.currentConditions.conditions;
  const feel = data.currentConditions.feelslike;

  console.log(myLocation);
  console.log(currentCondition);
  console.log(feel);
}

export { processData };
