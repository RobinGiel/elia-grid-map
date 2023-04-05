"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo, Spinner } from "@ui/index";
import { Field, Form, Formik } from "formik";
import { object, string } from "yup";
import { Warning } from "@ui/icons";
import supabase from "@utils/supabase";

const SignUpSchema = object().shape({
  email: string().email("Invalid email").required("Required"),
  password: string().required("Required"),
});

export default function Register() {
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function signUp(formData: { email: string; password: string }) {
    setIsLoading(true);
    const { error } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
    });

    if (error) {
      setErrorMsg(error.message);
      setIsLoading(false);
    } else {
      setIsLoading(false);
      setSuccessMsg("Check your email for the confirmation link.");
    }
  }

  return (
    <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm">
      <div className="p-4 sm:p-7">
        <div className="text-center">
          <Logo />
          <h1 className="block text-2xl font-bold text-gray-800">Sign up</h1>
          <p className="mt-2 text-sm text-gray-600 ">
            Already have an account?
            <Link
              className="text-flushOrange-600 decoration-2 hover:underline font-medium"
              href="/"
            >
              Sign in here
            </Link>
          </p>
        </div>

        <div className="mt-5">
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={SignUpSchema}
            onSubmit={signUp}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="grid gap-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm mb-2 d">
                      Email address
                    </label>
                    <div className="relative">
                      <Field
                        type="email"
                        id="email"
                        name="email"
                        className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-flushOrange-500 focus:ring-flushOrange-500"
                      />

                      <div
                        className={
                          errors.email && touched.email
                            ? `absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3`
                            : `hidden`
                        }
                      >
                        <Warning />
                      </div>
                      <p
                        className={
                          errors.email && touched.email
                            ? `text-xs text-red-600 mt-2`
                            : `hidden`
                        }
                        id="email-error"
                      ></p>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="password" className="block text-sm mb-2 d">
                      Password
                    </label>
                    <div className="relative">
                      <Field
                        type="password"
                        id="password"
                        name="password"
                        className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-flushOrange-500 focus:ring-flushOrange-500"
                      />

                      <div
                        className={
                          errors.password && touched.password
                            ? `absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3`
                            : `hidden`
                        }
                      >
                        <Warning />
                      </div>
                      <p
                        className={
                          errors.password && touched.password
                            ? `text-xs text-red-600 mt-2`
                            : `hidden`
                        }
                        id="password-error"
                      ></p>
                    </div>
                  </div>

                  <button
                    disabled={successMsg !== null || isLoading}
                    type="submit"
                    className="py-3 px-4 inline-flex disabled:opacity-75 justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-flushOrange-500 text-white hover:bg-flushOrange-600 focus:outline-none focus:ring-2 focus:ring-flushOrange-500 focus:ring-offset-2 transition-all text-sm "
                  >
                    {isLoading ? <Spinner /> : null}
                    Sign up
                  </button>
                </div>
              </Form>
            )}
          </Formik>
          {errorMsg && (
            <>
              <div
                className="bg-red-50 border border-red-200 text-sm text-red-600 rounded-md p-4"
                role="alert"
              >
                {errorMsg}
              </div>
            </>
          )}
          {successMsg && (
            <>
              <div
                className="bg-green-50 border border-green-200 text-sm mt-5 text-green-600 rounded-md p-4"
                role="alert"
              >
                <span className="font-bold">Success</span> {successMsg}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
