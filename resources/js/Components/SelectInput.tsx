import { forwardRef, useRef, InputHTMLAttributes } from "react";

export default forwardRef(function SelectInput(
    {
        className = "",
        isFocused = false,
        ...props
    }: InputHTMLAttributes<HTMLSelectElement> & { isFocused?: boolean },
    ref
) {
    const localRef = useRef<HTMLSelectElement>(null);

    return (
        <select
            {...props}
            className={
                "border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm " +
                className
            }
            ref={localRef}
        ></select>
    );
});
