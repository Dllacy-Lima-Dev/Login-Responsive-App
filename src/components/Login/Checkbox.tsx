interface CheckboxProps {
  id: string;
  name: string;
  label: string;
}

export function Checkbox({ id, name, label }: CheckboxProps) {
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        id={id}
        name={name}
        className="h-4 w-4 text-blue-500 focus:ring-blue-300 border-gray-300 rounded"
      />
      <label htmlFor={id} className="ml-2 block text-sm text-gray-900">
        {label}
      </label>
    </div>
  );
}