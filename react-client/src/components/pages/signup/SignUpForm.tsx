import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, Formik } from 'formik';
import { NavLink } from 'react-router-dom';
import * as Yup from 'yup';

interface FormValues {
  email: string;
  password: string;
  confirmPassword: string;
}

const validationSchema = Yup.object({
  email: Yup.string().required('Email is required').email('Invalid email'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords dont match')
    .required('Confirm password is required'),
});

const initalValues: FormValues = {
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpForm = () => {
  const handleSubmit = async (values: FormValues) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={initalValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ getFieldProps, errors }) => (
        <Form className="flex flex-col w-full space-y-6 sm:justify-center sm:w-[400px]">
          <Input
            type="email"
            id="email"
            placeholder="Email"
            {...getFieldProps('email')}
          />

          <Input
            type="password"
            id="password"
            placeholder="Password"
            {...getFieldProps('password')}
          />

          <Input
            type="password"
            id="confirmPassword"
            placeholder="Confirm Password"
            {...getFieldProps('confirmPassword')}
          />

          <Button type="submit" className="w-full p-6" size={'lg'}>
            Create Account
          </Button>
          {JSON.stringify(errors)}
          <span className="self-center">
            Already have an account?{' '}
            <NavLink to="/login" className="text-primary">
              Login
            </NavLink>
          </span>
        </Form>
      )}
    </Formik>
  );
};

export default SignUpForm;
