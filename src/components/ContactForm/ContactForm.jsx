import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import { useId } from "react";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

const UserSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short, min 3 symbols!")
    .max(50, "Max 50 symbols")
    .required("Required"),
  number: Yup.string()
    .matches(/^[0-9/-]+$/)
    .min(7, "Must be valid number, example 111-11-11")
    .required("Required"),
});

export default function ContactForm({ onAdd }) {
  const handleSubmit = (values, actions) => {
    onAdd({ ...values, id: nanoid() });
    actions.resetForm();
  };

  const fieldId = useId();

  const initialValues = { name: "", number: "" };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={UserSchema}
    >
      <Form className={css.container}>
        <div className={css.formField}>
          <label htmlFor={`${fieldId}-name`}>Name</label>
          <Field
            className={css.input}
            type="text"
            name="name"
            id={`${fieldId}-name`}
          />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>
        <div className={css.formField}>
          <label htmlFor={`${fieldId}-number`}>Number</label>
          <Field
            className={css.input}
            type="tel"
            name="number"
            id={`${fieldId}-number`}
          />
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>
        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
