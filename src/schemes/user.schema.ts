import { object, string, TypeOf } from "zod";

export const createUserSchema = object({
  body: object({
    firstName: string({
      required_error: "Firstname is required",
    }),
    lastName: string({
      required_error: "Lastname is required",
    }),
    password: string({
      required_error: "Password is required",
    }).min(6, "Password is too short"),
    passwordConfirmation: string({
      required_error: "Password Confirmation is required",
    }),
    email: string({
      required_error: "Email is required",
    }).email("Not a valid email"),
  }).refine((data) => data.password === data.passwordConfirmation, {
    message: "Password do not match",
    path: ["passwordConfirmation"], //debugging purposes
  }),
});
export type CreateUserInput = TypeOf<typeof createUserSchema>["body"];

export const verifyUserSchema = object({
  params: object({
    id: string(),
    verificationCode: string(),
  }),
});
export type VerifyUserInput = TypeOf<typeof verifyUserSchema>["params"];

export const forgotPasswordSchema = object({
  body: object({
    email: string({
      required_error: "Emails is required",
    }).email("Not a valid email"),
  }),
});

export type ForgotPasswordInput = TypeOf<typeof forgotPasswordSchema>["body"];

export const resetPasswordSchema = object({
  params: object({
    id: string({
      required_error: "Id is required",
    }),
    passwordResetCode: string({
      required_error: "PasswordResetCode is required",
    }),
  }),
  body: object({
    password: string({
      required_error: "Password is required",
    }).min(6, "Password is too short - should be min 6 chars"),
    passwordConfirmation: string({
      required_error: "Password confirmation is required",
    }),
  }).refine((data) => data.password === data.passwordConfirmation, {
    message: "Passwords do not match",
    path: ["passwordConfirmation"],
  }),
});

export type ResetPasswordInput = TypeOf<typeof resetPasswordSchema>;
