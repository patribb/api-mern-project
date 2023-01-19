import { setLocale } from "yup";
setLocale({
  mixed: {
    required: "Este campo es obligatorio",
    notType: "El formato introducido no es válido",
    defined: "Este campo precisa tener un campo definido",
    oneOf: "Debe tener uno de los siguientes valores: ${values}",
    notOneOf: "No pueden ser ninguno de los siguientes valores: ${values}",
  },
  string: {
    lowercase: "Deber estar en minúsculas",
    uppercase: "Deber estar en mayúsculas",
    url: "Debe tener un formato URL válido",
    max: "Debe tener un máximo de ${max} caracteres",
    min: "Debe tener un mínimo de ${min} caracteres",
    email: "Formato de email incorrecto",
    length: "Debe tener exactamente ${length} caracteres",
    uuid: "Valor de UUID no válido",
    trim: "No debe contener espacios el el inicio o al final",
    matches: "El valor debe corresponder a: ${regex}",
  },
  number: {
    min: "Debe ser nº menor ${min}",
    max: "Debe ser nº mayor ${max}",
    integer: "Debe ser un  número enetero",
    lessThan: "Debe ser menor que ${less}",
    moreThan: "Debe ser mayor que ${more}",
    positive: "Debe ser un número positivo",
    negative: "Debe ser un número negativo",
  },
  date: {
    min: "Debe ser mayor a esta fecha ${min}",
    max: "Debe ser menor a esta fecha ${max}",
  },
  array: {
    min: "Debe tener un mínimo de ${min} items",
    max: "Debe tener un máximo de ${max} items",
    length: "Debe contener exactamente ${length} items",
  },
  object: {
    noUnknown: "Debe tener un valor definido",
  },
});
