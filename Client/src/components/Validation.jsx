const validate = (email, password) => {
  let errors = {};

  // Validación de email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) {
    errors.email = "El email no puede estar vacío";
  } else if (!emailRegex.test(email)) {
    errors.email = "El email no es válido";
  } else if (email.length > 35) {
    errors.email = "El email no puede tener más de 35 caracteres";
  }

  // Validación de contraseña
  const passwordRegex = /^(?=.*\d).{6,10}$/;
  if (!password) {
    errors.password = "La contraseña no puede estar vacía";
  } else if (!passwordRegex.test(password)) {
    errors.password =
      "La contraseña debe tener al menos un número y una longitud entre 6 y 10 caracteres";
  }

  return errors;
};

export default validate;
