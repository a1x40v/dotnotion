import { useLogin } from '@/app/hooks/authHooks';
import Loader from '@/components/global/Loader';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
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
  const { mutate: login, isPending, isError, error } = useLogin();

  const handleSubmit = async (values: FormValues) => {
    await login(values);
  };

  return (
    <Formik
      initialValues={initalValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ getFieldProps }) => (
        <Form className="flex flex-col w-full space-y-6 sm:justify-center sm:w-[400px]">
          <Input
            type="email"
            id="email"
            placeholder="Email"
            disabled={isPending}
            {...getFieldProps('email')}
          />

          <Input
            type="password"
            id="password"
            placeholder="Password"
            {...getFieldProps('password')}
          />

          <Button
            type="submit"
            className="w-full p-6"
            size={'lg'}
            disabled={isPending}
          >
            {isPending ? <Loader /> : 'Login'}
          </Button>
          {isError && <div>{error.detail}</div>}
          <span className="self-center">
            Dont have an account? <a className="text-primary">Sign Up</a>
          </span>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
