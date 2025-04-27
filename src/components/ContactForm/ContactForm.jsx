import { nanoid } from 'nanoid';
import { Formik, Field, Form } from 'formik';

export default function ContactForm({ onSubmit }) {
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={(values, actions) => {
        onSubmit({
          id: nanoid(),
          name: values.name,
          number: values.number,
        });
        actions.resetForm();
      }}
    >
      <Form>
        <label htmlFor="name">Name</label>
        <Field id="name" name="name" required />
        <label htmlFor="number">Number</label>
        <Field id="number" name="number" required />
        <button type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
}
