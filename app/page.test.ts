import { server } from "../mocks/node";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("test", () => {
  expect(true).toBeTruthy();
});
