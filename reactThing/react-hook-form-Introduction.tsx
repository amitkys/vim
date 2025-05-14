import { useForm } from "react-hook-form"
export default function App() {
  // useForm hook initializes the form and provides methods for handling form state and validation
  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    defaultValues: {
      firstName: "amit", // Default value for the firstName field
      secondName: "kys", // Default value for the secondName field
    }
  });

  console.log(errors); // Logs validation errors, if any

  // watch allows you to monitor the value of specific fields in real-time
  const firstName = (watch("firstName"));
  console.log(firstName);

  return (
    <form onSubmit={handleSubmit((data) => {
      // handleSubmit processes the form data when the form is submitted
      console.log(data); // Logs the submitted form data
    })}>
      {/* register connects the input field to the form state and applies validation rules */}
      <input {...register("firstName", { required: "First name is required" })} type="text" placeholder="First name" />
      <div>{errors.firstName?.message}</div> {/* Displays validation error for firstName */}
      <p>{firstName}</p> {/* Displays the real-time value of firstName */}

      <input {...register("secondName", {
        required: "second name is required",
        minLength: { value: 4, message: "minimum length should be 4" }
      })} type="text" placeholder="second name" />
      {errors.secondName?.message} {/* Displays validation error for secondName */}

      <input type="submit" /> {/* Submit button */}
    </form>
  )
}
