import './style.css';

async function getData() {
  try {
    const data = await fetch(
      'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Vancouver?unitGroup=metric&key=A72ZE4RZ682RFQY6HMMP76233&contentType=json',
    );
    console.log(data);
  } catch {
    console.log('error');
  }
}

getData();
