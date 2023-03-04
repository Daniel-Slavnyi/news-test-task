import { Formik, Form, Field } from 'formik';
import { TextField, Button, Container } from '@mui/material';
import * as Yup from 'yup';
import { register } from 'redux/auth/auth-oparation';
import { useDispatch } from 'react-redux';

const schema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().email(),
  password: Yup.string().min(6).max(12).required(),
});

const initialValues = {
  name: '',
  email: '',
  password: '',
};

export default function RegisterPage() {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));
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
            <Field name="name">
              {({ field, meta }) => (
                <TextField
                  label="Name"
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
    </Container>
  );
}

// import React from 'react';
// import { useDispatch } from 'react-redux';

// import { Formik, Form, Field } from 'formik';

// export default function RegisterPage() {

//   const handleSubmit = (values, { resetForm }) => {
//     dispatch(register(values));
//     resetForm();
//   };

//   return (
//     <Formik
//       initialValues={initialValues}
//       onSubmit={handleSubmit}
//       validationSchema={schema}
//     >
//       <Form>
//         <label>
//           <Field type="text" name="name" />
//           <span>Name</span>
//         </label>
//         <label>
//           <Field type="email" name="email" />
//           <span>Email</span>
//         </label>
//         <label>
//           <Field type="password" name="password" autoComplete="true" />
//           <span>Password</span>
//         </label>
//         <button type="submit">Register</button>
//       </Form>
//     </Formik>
//   );
// }
