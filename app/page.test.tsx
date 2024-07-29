import { render, screen } from "@testing-library/react";
import { server } from "../mocks/node";
import Home from "@/app/page";
import { userEvent } from "@testing-library/user-event";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("test", async () => {
  render(<Home />);

  await userEvent.click(screen.getByText("request"));

  screen.debug();
});
