import { http, HttpResponse } from "msw";

export const handlers = [
  http.post("/posts", async ({ request }) => {
    const data = await request.json();
    return HttpResponse.json(data, { status: 200 });
  }),
];
