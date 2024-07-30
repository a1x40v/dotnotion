import { Form, Formik } from 'formik';
import * as Yup from 'yup';

interface FormValues {
  email: string;
  password: string;
}

const validationSchema = Yup.object({
  email: Yup.string().required('Email is required').email('Email incorrect'),
  password: Yup.string().required('Password is required'),
});

const initalValues: FormValues = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const handleSubmit = async (values: FormValues) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={initalValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ getFieldProps }) => (
        <Form>
          <div>
            <label htmlFor="email">Email</label>
            <input type="text" id="email" {...getFieldProps('email')} />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" {...getFieldProps('email')} />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
