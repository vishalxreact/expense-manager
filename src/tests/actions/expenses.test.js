import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test("should remove expense item", () => {
  const action = removeExpense({ id: "123eqw" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123eqw",
  });
});

test("should edit expense", () => {
  const result = editExpense("123abc", { note: "new value" });
  expect(result).toEqual({
    type: "EDIT_EXPENSE",
    id: "123abc",
    updates: { note: "new value" },
  });
});

test("setup add expense", () => {
  const expenseData = {
    description: "rent",
    amount: 2000,
    createdAt: 1000,
    note: "last month rent",
  };
  const result = addExpense(expenseData);
  expect(result).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...expenseData,
      id: expect.any(String),
    },
  });
});

test("setup add expense WITH DEFAULT VALUES", () => {
  const result = addExpense();
  expect(result).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      id: expect.any(String),
      description: "",
      note: "",
      amount: 0,
      createdAt: 0,
    },
  });
});
