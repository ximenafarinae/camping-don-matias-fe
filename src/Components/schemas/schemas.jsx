import * as yup from "yup";

export const schemaFamilyMember = yup.object().shape({
  name: yup.string().required(),
  last_name: yup.string().required(),
  dni: yup.number().required(),
  age: yup.number().required(),
});

export const tenantSchema = yup.object().shape({
  name: yup.string().required("Este campo es obligatorio"),
  last_name: yup.string().required("Este campo es obligatorio"),
  birth_date: yup
    .date((date) => {
      date.slice(1, 10);
    })
    .max(new Date(), "La fecha no puede ser posterior al dia de hoy")
    .required("Este campo es obligatorio"),
  dni: yup.number().required("Este campo es obligatorio"),
  vehicle_registration_number: yup
    .string()
    .required("Este campo es obligatorio"),
  phone: yup.string().required("Este campo es obligatorio"),
  email: yup.string().email().required("Este campo es obligatorio"),
  address: yup.string().required("Este campo es obligatorio"),
});

export const MedicalInfoSchema = yup.object().shape({
  health_insurance: yup.string().required("Este campo es obligatorio"),
  pre_existing_diseases: yup.string(),
  diseases_detail: yup.string().required("Este campo es obligatorio"),
  allergies: yup.string(),
  allergies_detail: yup.string().required("Este campo es obligatorio"),
  emergency_contact_complete_name: yup
    .string()
    .required("Este campo es obligatorio"),
  emergency_contact_number: yup.number().required("Este campo es obligatorio"),
});
