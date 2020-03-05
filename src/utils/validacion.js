export function validacion(values) {
  const errors = {};

  if (!values.title) {
    errors.title = 'Es necesario ingresar el titulo.'
  }

  if (!values.body) {
    errors.body = 'Es necesario ingresar el cuerpo del post.'
  }

  return errors;

}