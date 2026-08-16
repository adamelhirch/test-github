import { test } from "node:test";
import assert from "node:assert/strict";
import { add } from "../src/index.js";

test("add returns the sum of two positive numbers", () => {
  assert.equal(add(2, 3), 5);
});

test("add handles negative numbers", () => {
  assert.equal(add(-2, -3), -5);
});

test("add handles zero operands (edge case)", () => {
  assert.equal(add(0, 5), 5);
  assert.equal(add(5, 0), 5);
  assert.equal(add(0, 0), 0);
});
