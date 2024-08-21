import { test, afterEach, beforeEach, expect } from "vitest";
import { userEvent, type UserEvent } from "@testing-library/user-event";

let user: UserEvent;

beforeEach(() => {
  user = userEvent.setup();
});

afterEach(() => {
  document.body.innerHTML = "";
});

test("copy", async () => {
  const text = document.createElement("input");
  document.body.appendChild(text);

  text.value = "hello world";
  text.focus();
  text.select();
  await user.copy();

  const result = await window.navigator.clipboard.readText();
  expect(result).toEqual("hello world");
});

test("no copy", async () => {
  const result = await window.navigator.clipboard.readText();
  expect(result).toEqual("");
});
