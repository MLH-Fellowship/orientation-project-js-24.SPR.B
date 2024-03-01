export function Input({
  label,
  id,
  type = "text",
  value,
  placeholder,
  handleChange,
}) {
  return (
    <div className="inputContent">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={id}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        minLength={2}
        required={true}
      />
    </div>
  );
}

export function Textarea({ label, id, value, placeholder, handleChange }) {
  return (
    <div className="inputContent">
      <label htmlFor={id}>{label}</label>
      <textarea
        id={id}
        name={id}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        maxLength={200}
        rows={4}
        wrap="hard"
        required
      />
    </div>
  );
}
