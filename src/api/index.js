export const fetchJobsAPI = async (offset) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const body = JSON.stringify({
    limit: 10,
    offset: offset,
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
      return {
        jobs: data?.jdList,
        hasMore: data?.jdList?.length > 0,
      };
    }
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch jobs data");
  }
};
