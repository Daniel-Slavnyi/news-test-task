import React from 'react';
import { useDispatch } from 'react-redux';

import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import { register } from 'redux/auth/auth-oparation';

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
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <Form>
        <label>
          <Field type="text" name="name" />
          <span>Name</span>
        </label>
        <label>
          <Field type="email" name="email" />
          <span>Email</span>
        </label>
        <label>
          <Field type="password" name="password" autoComplete="true" />
          <span>Password</span>
        </label>
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
}
