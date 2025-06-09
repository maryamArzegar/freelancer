function RadioInput({
  label,
  name,
  id,
  value,
  register,

  errors,
  validationSchema,
  watch,
}) {
  return (
    <div className="flex items-center gap-x-2 to-secondary-600">
      <input
        type="radio"
        name={name}
        id={id}
        value={value}
        {...register(name, validationSchema)}
        checked={watch(name) === value}
      />
      <label htmlFor={id}>{label}</label>

    </div>
  );
}

export default RadioInput;
