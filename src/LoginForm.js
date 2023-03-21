
// validate = { values => {
//     let errors = {};

//     const passwordRegex = /(?=.*[0-9])/;
//     if (!values.password) {
//         errors.password = "Required";
//     } else if (values.password.length < 8) {
//         errors.password = "Password must be 8 characters long.";
//     } else if (!passwordRegex.test(values.password)) {
//         // errors.password = "Invalid password. Must contain one number.";
//     }

//     return errors;
// }}

// <input
//     id="email"
//     name="email"
//     type="text"
//     placeholder="Enter your email"
//     value={values.email}
//     onChange={handleChange}
//     onBlur={handleBlur}
//     className={errors.email && touched.email && "error"}
// />
// {
//     errors.email && touched.email && (
//         <div className="input-feedback">{errors.email}</div>
//     )
// }

// <label htmlFor="password">Password</label>
// <input
//   id="password"
//   name="password"
//   type="password"
//   placeholder="Enter your password"
//   value={values.password}
//   onChange={handleChange}
//   onBlur={handleBlur}
//   className={errors.password && touched.password && "error"}
// />
// {
//     errors.password && touched.password && (
//         <div className="input-feedback">{errors.password}</div>
//     )
// }