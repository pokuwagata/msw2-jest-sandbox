import { render, screen } from "@testing-library/react";
import { server } from "../mocks/node";
import Home from "@/app/page";
import { userEvent } from "@testing-library/user-event";
import { http, HttpResponse } from "msw";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("test", async () => {
  const mockfn = jest.fn();

  server.use(
    http.post("http://localhost:3000/api/test", async ({ request }) => {
      const formData = await request.formData();

      mockfn({
        name: formData.get("name"),
        age: formData.get("age"),
      });

      return HttpResponse.json(
        {
          result: "ok",
        },
        { status: 200 }
      );
    })
  );

  const inputData = {
    name: "foo",
    age: "30",
  };

  render(<Home />);

  await userEvent.click(screen.getByText("request"));

  expect(mockfn).toHaveBeenCalledWith(inputData);

  screen.debug();
});
