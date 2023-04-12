"use client";
import { Field, Form, Formik } from "formik";
import { object, string, number } from "yup";
import { Spinner, Warning } from "@ui/index";
import { FC, useState } from "react";
import { useSupabase, useToast } from "@components/index";

const GridStationSchema = object().shape({
  lat: number().required("Required").integer(),
  long: number().required("Required").integer(),
  name: string().required("Required"),
  contact: string(),
  status: string(),
});

interface GridStationFormProps {
  userId: string | null;
}

const GridStationForm: FC<GridStationFormProps> = ({ userId }) => {
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { supabase } = useSupabase();
  const toast = useToast();

  async function addGridstation(formData: {
    lat: number;
    long: number;
    name: string;
    contact: string;
    status: string;
  }) {
    setIsLoading(true);
    const { error } = await supabase.from("gridstations").insert([
      {
        location: `POINT(${formData.lat} ${formData.long})`,
        name: formData.name,
        contact: formData.contact,
        status: formData.status,
        created_by: userId,
      },
    ]);

    if (error) {
      toast.warning(error.message);
      setIsLoading(false);
    } else {
      setIsLoading(false);
      toast.success("Gridstation added successfully.");
    }
  }

  return (
    <>
      <Formik
        initialValues={{
          lat: 0,
          long: 0,
          name: "",
          contact: "",
          status: "",
        }}
        validationSchema={GridStationSchema}
        onSubmit={addGridstation}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="grid gap-y-4">
              <div>
                <label
                  htmlFor="latitude"
                  className="block text-sm mb-2 dark:text-white "
                >
                  Latitude
                </label>
                <div className="relative">
                  <Field
                    id="latitude"
                    name="latitude"
                    className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-flushOrange-500 focus:ring-flushOrange-500"
                  />

                  <div
                    className={
                      errors.lat && touched.lat
                        ? `absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3`
                        : `hidden`
                    }
                  >
                    <Warning />
                  </div>
                  <p
                    className={
                      errors.lat && touched.lat
                        ? `text-xs text-red-600 mt-2`
                        : `hidden`
                    }
                    id="latitude-error"
                  ></p>
                </div>
              </div>

              <div>
                <label
                  htmlFor="longitude"
                  className="block text-sm mb-2 dark:text-white "
                >
                  Longitude
                </label>
                <div className="relative">
                  <Field
                    id="longitude"
                    name="longitude"
                    className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-flushOrange-500 focus:ring-flushOrange-500"
                  />

                  <div
                    className={
                      errors.long && touched.long
                        ? `absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3`
                        : `hidden`
                    }
                  >
                    <Warning />
                  </div>
                  <p
                    className={
                      errors.long && touched.long
                        ? `text-xs text-red-600 mt-2`
                        : `hidden`
                    }
                    id="longitude-error"
                  ></p>
                </div>
              </div>

              <div>
                <label
                  htmlFor="name"
                  className="block text-sm mb-2 dark:text-white"
                >
                  Gridstation Name
                </label>
                <div className="relative">
                  <Field
                    type="string"
                    id="name"
                    name="name"
                    className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-flushOrange-500 focus:ring-flushOrange-500"
                  />

                  <div
                    className={
                      errors.long && touched.long
                        ? `absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3`
                        : `hidden`
                    }
                  >
                    <Warning />
                  </div>
                  <p
                    className={
                      errors.long && touched.long
                        ? `text-xs text-red-600 mt-2`
                        : `hidden`
                    }
                    id="name-error"
                  ></p>
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact"
                  className="block text-sm mb-2 dark:text-white "
                >
                  Contact
                </label>
                <div className="relative">
                  <Field
                    type="select"
                    id="contact"
                    name="contact"
                    className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-flushOrange-500 focus:ring-flushOrange-500"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="status"
                  className="block text-sm mb-2 dark:text-white "
                >
                  Gridstation Status
                </label>
                <div className="relative">
                  <Field
                    as="select"
                    id="status"
                    name="status"
                    className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-flushOrange-500 focus:ring-flushOrange-500"
                  >
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                    <option value="under_construction">
                      Under Construction
                    </option>
                  </Field>
                </div>
              </div>

              <button
                disabled={isLoading}
                type="submit"
                className="py-3 px-4 inline-flex disabled:opacity-75 justify-center w-full items-center gap-2 rounded-md border border-transparent font-semibold bg-flushOrange-500 text-white hover:bg-flushOrange-600 focus:outline-none focus:ring-2 focus:ring-flushOrange-500 focus:ring-offset-2 transition-all text-sm "
              >
                {isLoading ? <Spinner /> : null}
                Add Gridstation
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default GridStationForm;
