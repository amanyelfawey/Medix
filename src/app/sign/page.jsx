// import React from "react";
// import { useFormik } from "formik";

// const validate = (values) => {
//   const errors = {};
//   if (!values.firstName) {
//     errors.firstName = "First Name cannot be empty";
//   } else if (values.firstName.length > 15) {
//     errors.firstName = "Must be 15 characters or less";
//   }

//   if (!values.lastName) {
//     errors.lastName = "Last Name cannot be empty";
//   } else if (values.lastName.length > 20) {
//     errors.lastName = "Must be 20 characters or less";
//   }

//   if (!values.email) {
//     errors.email = "Email is required";
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     errors.email = "Invalid email address";
//   }

//   if (!values.password) {
//     errors.password = "Password is required";
//   } else if (values.password.length < 8) {
//     errors.password = "Password must not be less than 8 characters";
//   }

//   return errors;
// };

// function FormSection() {
//   const formik = useFormik({
//     initialValues: {
//       firstName: "",
//       lastName: "",
//       email: "",
//     },
//     validate,
//     onSubmit: (values) => {
//       alert(JSON.stringify(values, null, 2));
//     },
//   });

//   return (
//     <div className="section-container">
//       <button className="trial-btn text-white cursor-pointer">
//         <span className="text-bold">Try it free 7 days</span> then
//         $20/mo.thereafter
//       </button>
//       <div className="form-container">
//         <form onSubmit={formik.handleSubmit}>
//           <input
//             type="text"
//             placeholder="First Name"
//             name="firstName"
//             id="firstName"
//             onChange={formik.handleChange}
//             value={formik.values.firstName}
//           />
//           {formik.errors.firstName ? (
//             <div className="error">{formik.errors.firstName}</div>
//           ) : null}
//           <input
//             type="text"
//             placeholder="Last Name"
//             name="lastName"
//             id="lastName"
//             onChange={formik.handleChange}
//             value={formik.values.lastName}
//           />
//           {formik.errors.lastName ? (
//             <div className="error">{formik.errors.lastName}</div>
//           ) : null}
//           <input
//             type="email"
//             placeholder="Email Address"
//             name="email"
//             id="email"
//             onChange={formik.handleChange}
//             value={formik.values.email}
//           />
//           {formik.errors.email ? (
//             <div className="error">{formik.errors.email}</div>
//           ) : null}
//           <input
//             type="password"
//             placeholder="Password"
//             name="password"
//             id="password"
//             onChange={formik.handleChange}
//             value={formik.values.password}
//           />
//           {formik.errors.password ? (
//             <div className="error">{formik.errors.password}</div>
//           ) : null}
//           <button
//             type="submit"
//             className="submit-btn text-white cursor-pointer"
//           >
//             CLAIM YOUR FREE TRIAL
//           </button>
//         </form>
//         <p className="terms-text">
//           By clicking the button, you are agreeing to our&nbsp;
//           <a href="nothing" className="terms-link">
//             Terms and Services
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default FormSection;