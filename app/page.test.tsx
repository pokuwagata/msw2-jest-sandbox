import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { http, HttpResponse } from "msw";
import { server } from "../mocks/node";
import Home from "@/app/page";

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

  await userEvent.type(screen.getByLabelText("name"), inputData.name);
  await userEvent.type(screen.getByLabelText("age"), inputData.age);

  await userEvent.click(screen.getByText("submit"));

  expect(mockfn).toHaveBeenCalledWith(inputData);
});
