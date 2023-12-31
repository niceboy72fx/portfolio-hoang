export async function fetchCar() {
  const manufacturer = "";
  const year = "";
  const model = "awd";
  const limit = "8";
  const fuel = "gas";
  const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "834bccc5b6msh1ca71083efd0654p1c056djsn09a04f4209e5",
      "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
    },
  };

  try {
    return (await fetch(url, options)).json();
  } catch (error) {
    console.error(error);
  }
}
