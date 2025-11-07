// src/components/ui/Button.jsx
export function Button({ children, className, ...props }) {
  return (
    <button
      {...props}
      className={`px-4 py-2 rounded-lg font-medium shadow-sm transition
      bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 ${className}`}
    >
      {children}
    </button>
  );
}
