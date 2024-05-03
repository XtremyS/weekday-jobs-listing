// API function to fetch jobs data
export const fetchJobsAPI = async () => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const body = JSON.stringify({
    limit: 100,
    offset: 0,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body,
  };

  try {
    const response = await fetch(
      "https://api.weekday.technology/adhoc/getSampleJdJSON",
      requestOptions
    );

    if (response.status === 200) {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch jobs data");
  }
};