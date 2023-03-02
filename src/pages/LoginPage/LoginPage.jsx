import React from 'react';
import { useDispatch } from 'react-redux';

import { Formik, ErrorMessage, Form, Field } from 'formik';
import * as Yup from 'yup';

import { login } from 'redux/auth/auth-oparation';

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

  const handleSubmit = (values, { resetForm }) => {
    dispatch(login(values));
    resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <Form>
        <label>
          <Field type="email" name="email" />
          <span>Email</span>
        </label>
        <label>
          <Field type="password" name="password" />
          <span>Password</span>
        </label>
        <button>Login</button>
      </Form>
    </Formik>
  );
}
