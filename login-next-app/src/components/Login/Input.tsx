interface InputProps {
  id: string;
  name: string;
  type: string;
  placeholder: string;
  label: string;
}

export function Input({ id, name, type, placeholder, label }: InputProps) {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-sm text-black font-semibold mb-3">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-300 focus:border-blue-500"
        placeholder={placeholder}
      />
    </div>
  );
}