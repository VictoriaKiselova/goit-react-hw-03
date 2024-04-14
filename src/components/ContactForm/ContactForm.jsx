import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Min 3 chars!")
    .max(50, "Max 50 chars!")
    .required("is required!"),
  number: Yup.string()
    .matches(
      /^\d{3}-\d{2}-\d{2}$/,
      "The phone number must be in the format XXX-XX-XX"
    )
    .min(9, "Min 7 chars!")
    .max(9, "Max 9 chars!")
    .required("is required!"),
});

export default function ContactForm({ addContact }) {
  const newName = nanoid();
  const newNumber = nanoid();
  const id = nanoid();

  const handleSubmit = (values, actions) => {
    const newContact = {
      id: id,
      ...values,
    };
    addContact(newContact);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={contactSchema}
      onSubmit={handleSubmit}>
      <Form className={css.form}>
        <label htmlFor={newName} className={css.label}>
          Name
        </label>
        <Field name="name" id={newName} className={css.input} />
        <ErrorMessage name="name" className={css.error} component="span" />

        <label htmlFor={newNumber} className={css.label}>
          Number
        </label>
        <Field type="tel" name="number" id={newNumber} className={css.input} />
        <ErrorMessage name="number" className={css.error} component="span" />

        <button type="submit" className={css.buttonAdd}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
