import { useForm } from "react-hook-form";
import { useRegisterComplaint } from "./useRegisterComplaint";
import PropTypes from "prop-types";

// Error message component with prop validation
const FormError = ({ message = "An error occurred" }) => (
  <p className="mt-1 text-xs text-red-500">{message}</p>
);

FormError.propTypes = {
  message: PropTypes.string,
};

// Submission error component with prop validation
const SubmissionError = ({ message = "Submission failed" }) => (
  <div className="mb-4 rounded-md bg-red-50 p-3 text-sm text-red-600">
    {message}
  </div>
);

SubmissionError.propTypes = {
  message: PropTypes.string,
};

const NewComplaint = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { registerComplaint, isSubmitting, error } = useRegisterComplaint();

  const onSubmit = async (data) => {
    console.log(data);
    const result = await registerComplaint(data.description);
    if (result.success) {
      // Reset form after successful submission
      reset();
    }
  };

  return (
    <div className="rounded-lg bg-white p-6 shadow-md">
      <h2 className="mb-4 text-lg font-semibold">Register New Complaint</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="mb-1 block text-sm font-medium">Description</label>
          <textarea
            className="w-full rounded-md border p-2"
            rows="4"
            placeholder="Describe your complaint in detail"
            {...register("description", {
              required: "Description is required",
            })}
          ></textarea>
          {errors.description && (
            <FormError message={errors.description.message} />
          )}
        </div>

        {error && <SubmissionError message={error} />}

        <button
          type="submit"
          disabled={isSubmitting}
          className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 disabled:bg-blue-300"
        >
          {isSubmitting ? "Submitting..." : "Submit Complaint"}
        </button>
      </form>
    </div>
  );
};

export default NewComplaint;
