import { Formik, Form, Field } from 'formik';
import { TextField, Button, Container, Alert } from '@mui/material';
import * as Yup from 'yup';
import { login } from 'redux/auth/auth-oparation';
import { useDispatch, useSelector } from 'react-redux';

import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import { getStatusOfMessage } from 'redux/auth/auth-selector';

const schema = Yup.object().shape({
  email: Yup.string().email(),
  password: Yup.string().min(6).max(12).required(),
});

const initialValues = {
  email: '',
  password: '',
};

export default function RegisterPage() {
  const dispatch = useDispatch();
  const statusOfMessage = useSelector(getStatusOfMessage);

  const handleSubmit = (values, { resetForm }) => {
    dispatch(login(values));
    resetForm();
  };

  return (
    <Container>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
        validateOnBlur={false}
      >
        {({ handleSubmit }) => (
          <Form
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              marginTop: '20px',
            }}
            onSubmit={handleSubmit}
          >
            <Field name="email">
              {({ field, meta }) => (
                <TextField
                  label="Email"
                  {...field}
                  error={meta.touched && Boolean(meta.error)}
                  helperText={meta.touched && meta.error}
                  style={{
                    borderBottom:
                      meta.touched && meta.error ? '2px solid red' : 'none',
                  }}
                />
              )}
            </Field>
            <Field name="password">
              {({ field, meta }) => (
                <TextField
                  autoComplete="true"
                  label="Password"
                  type="password"
                  {...field}
                  error={meta.touched && Boolean(meta.error)}
                  helperText={meta.touched && meta.error}
                  style={{
                    borderBottom:
                      meta.touched && meta.error ? '2px solid red' : 'none',
                  }}
                />
              )}
            </Field>
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </Form>
        )}
      </Formik>
      <Stack spacing={2} sx={{ width: '100%' }}>
        <Snackbar open={statusOfMessage} autoHideDuration={3000}>
          <Alert severity="error" sx={{ width: '100%' }}>
            It looks like password or email is wrong!
          </Alert>
        </Snackbar>
      </Stack>
    </Container>
  );
}
