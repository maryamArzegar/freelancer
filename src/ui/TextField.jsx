function TextField({
  label,
  name,
  register,
  validationSchema,
  type = "text",
  required,
  errors
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-secondary-700">
        {label} {required && <span className="text-error">*</span>}
      </label>
      <input
        {...register(name, validationSchema)}
        id={name}
        type={type}
        className="textField__input"
      />
      {errors && errors[name]&& (
        <span className="text-error block mt-2 text-sm">
          {errors[name]?.message}
        </span>
        
      )}
    </div>
  );
}

export default TextField;
