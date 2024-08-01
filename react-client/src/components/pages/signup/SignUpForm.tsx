import { useSignUp } from '@/app/hooks/authHooks';
import Loader from '@/components/global/Loader';
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
  const { mutate: signUp, isPending, isError, error } = useSignUp();

  const handleSubmit = async (values: FormValues) => {
    await signUp(values);
  };

  return (
    <Formik
      initialValues={initalValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ getFieldProps, dirty, isValid, touched, errors }) => (
        <Form className="flex flex-col w-full space-y-6 sm:justify-center sm:w-[400px]">
          <Input
            type="email"
            id="email"
            placeholder="Email"
            {...getFieldProps('email')}
          />
          {errors.email && touched.email ? (
            <p className="text-red-700">{errors.email}</p>
          ) : null}

          <Input
            type="password"
            id="password"
            placeholder="Password"
            {...getFieldProps('password')}
          />
          {errors.password && touched.password ? (
            <p className="text-red-700">{errors.password}</p>
          ) : null}

          <Input
            type="password"
            id="confirmPassword"
            placeholder="Confirm Password"
            {...getFieldProps('confirmPassword')}
          />
          {errors.confirmPassword && touched.confirmPassword ? (
            <p className="text-red-700">{errors.confirmPassword}</p>
          ) : null}

          <Button
            type="submit"
            className="w-full p-6"
            size={'lg'}
            disabled={isPending || !dirty || !isValid}
          >
            {isPending ? <Loader /> : 'Create Account'}
          </Button>
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
