import * as Yup from "yup";


export const validationSchema = Yup.object({
    name: Yup.string().required("Name is required!"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    channel: Yup.string().required("channel is required"),
});