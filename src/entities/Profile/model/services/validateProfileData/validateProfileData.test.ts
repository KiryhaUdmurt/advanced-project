import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { validateProfileData } from "./validateProfileData";
import { ValidateProfileError } from "../../types/profile";

const data = {
  username: "admin",
  age: 23,
  country: Country.Russia,
  first: "Kir",
  lastname: "Kalinin",
  city: "Kazan",
  currency: Currency.RUB,
};

describe("validateProfileData.test", () => {
  test("success validate", async () => {
    const result = validateProfileData(data);

    expect(result).toEqual([]);
  });

  test("without first nad last name", async () => {
    const result = validateProfileData({ ...data, first: "", lastname: "" });

    expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
  });

  test("incorrect age", async () => {
    const result = validateProfileData({ ...data, age: undefined });

    expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
  });

  test("server error", async () => {
    const result = validateProfileData(undefined);

    expect(result).toEqual([ValidateProfileError.NO_DATA]);
  });

  test("multiple incorrect", async () => {
    const result = validateProfileData({});

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_COUNTRY,
    ]);
  });
});
