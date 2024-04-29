import { expect, test } from "vitest";
import { mount } from "@vue/test-utils";
import BusinessCard from "../components/BusinessCard.vue";

test("renders a todo", () => {
  const wrapper = mount(BusinessCard);

  const todo = wrapper.get("[data-test='name']");

  expect(todo.text()).toBe("Bravo, Яна");
});
