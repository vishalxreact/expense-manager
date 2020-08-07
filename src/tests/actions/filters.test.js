import moment from "moment";
import {
  setStartDate,
  setEndDate,
  setTextFilter,
  sortByDate,
  sortByAmount,
} from "../../actions/filters";

test("should generate set Start date", () => {
  const result = setStartDate(moment(0));
  expect(result).toEqual({
    type: "SET_START_DATE",
    startDate: moment(0),
  });
});

test("set end date", () => {
  const result = setEndDate(moment(0));
  expect(result).toEqual({
    type: "SET_END_DATE",
    endDate: moment(0),
  });
});

test("should generate TEXT filter with default", () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: "",
  });
});

test("should generate text filter", () => {
  const result = setTextFilter("something");
  expect(result).toEqual({
    type: "SET_TEXT_FILTER",
    text: "something",
  });
});

test("generate sort by date", () => {
  const action = sortByDate();
  expect(action).toEqual({
    type: "SORT_BY_DATE",
  });
});

test("generate sort by amount", () => {
  const action = sortByAmount();
  expect(action).toEqual({
    type: "SORT_BY_AMOUNT",
  });
});
