import * as yup from "yup";

import { AppConstants, RegexExpression } from "@/src/constants";

const digitsOnly = (value?: string) => RegexExpression.NumbersOnly.test(value ?? "");

export const UserSchema = () =>
  yup.object().shape({
    firstName: yup.string().required(),
    middleName: yup.string().optional(),
    lastName: yup.string().required(),
    address_1: yup.string().required(),
    address_2: yup.string().optional(),
    dob: yup.string().required(),
    phone: yup
      .string()
      .required()
      .test("digits-only", digitsOnly)
      .min(AppConstants.Config.Validation.MOBILE_NUMBER_DIGIT)
      .max(AppConstants.Config.Validation.MOBILE_NUMBER_DIGIT),
    maritialStatus: yup.string().required(),
    spouseName: yup.string().when("maritialStatus", {
      is: "1",
      then: (schema) => schema.required(),
      otherwise: (schema) => schema.optional(),
    }),
    kidsStatus: yup.string().when("maritialStatus", {
      is: "1",
      then: (schema) => schema.required(),
      otherwise: (schema) => schema.optional(),
    }),
    numberOfKids: yup.string().when("kidsStatus", {
      is: "1",
      then: (schema) =>
        schema.required().matches(RegexExpression.NumberRangePattern, "Must be a number between 1 to 10"),
      otherwise: (schema) => schema.optional(),
    }),
    // grandFather: yup.string().required(),
    // father: yup.string().required(),
    bloodGroup: yup.string().optional(),
    email: yup.string().optional().email(),
    occupation: yup.string().optional(),
  });
