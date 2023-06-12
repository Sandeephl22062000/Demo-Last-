import { useFormik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import React from "react";
import validationSchema from "../schema/schema";
import { Button, Container, TextField } from "@mui/material";
import axios from "axios";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string().min(6).required("Password is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log("wqwqwq");
      console.log(values.email, values.password);

      const sendData = async () => {
        const postData = await axios.post(
          "http://localhost:3000/api/users/login",
          {
            email: values.email,
            password: values.password,
          }
        );
        console.log(postData);
        resetForm();
      };
      sendData();
    },
  });
  return (
    <>
      <h3 style={{ textAlign: "center", marginTop: "50px" }}>LOGIN</h3>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "40%",
          gap: "16px",
          marginTop: "40px",
          marginBottom: "50px",
          padding: "20px",
        }}
      >
        <form
          onSubmit={formik.handleSubmit}
          autoComplete="off"
          style={{ margin: "20px", padding: "10px" }}
        >
          <TextField
            required
            id="outlined-required"
            name="email"
            value={formik.values.email}
            label="Email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            sx={{ width: "100%", margin: "10px" }}
          />
          <TextField
            required
            id="outlined-required"
            name="password"
            value={formik.values.password}
            label="password"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            sx={{ width: "100%", margin: "10px" }}
          />

          <Button
            type="submit"
            sx={{
              color: "white",
              backgroundColor: "red",
              width: "130px",
              height: "50px",
              fontSize: "19px",
              margin: "10px",
              justifyContent: "center",
            }}
          >
            Submit
          </Button>
        </form>
      </Container>
    </>
  );
};
export default Login;
