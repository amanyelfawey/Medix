const createSignupFormData = (values) => {
  const formData = new FormData();
  formData.append("Username", values.username);
  formData.append("Email", values.email);
  formData.append("Password", values.password);
  formData.append("IsDoctor", values.isDoctor);
  formData.append("IsPatient", !values.isDoctor);
  return formData;
};

const createLoginFormData = (values) => {
  const formData = new FormData();
  formData.append("Email", values.email);
  formData.append("Password", values.password);
  return formData;
};

export const createFormData = (values, isLogin) => {
  const formData = isLogin ? createLoginFormData(values) : createSignupFormData(values);
  return formData;
};
