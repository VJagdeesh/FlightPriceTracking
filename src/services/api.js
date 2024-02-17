import dayjs from "dayjs";
const url = "http://localhost:3000";
export async function searchFlights({ from, to, departDate, returnDate }) {
  try {
    const resp = await fetch(
      `${url}/search?from=${from}&to=${to}&departDate=${dayjs(
        departDate
      ).format("YYMMDD")}&returnDate=${dayjs(returnDate).format("YYMMDD")}`
    );
    if (resp.status !== 200) {
      return { error: "Failed to fetch data ", data: [] };
    }
    return {
      data: await resp.json(),
    };
  } catch (e) {
    return {
      error: "Network Error",
      data: [],
    };
  }
}
