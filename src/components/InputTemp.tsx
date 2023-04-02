import { FieldInputProps } from "formik";
import { HTMLInputTypeAttribute } from "react";

interface Props {
  heading: string;
  type?: HTMLInputTypeAttribute;
  fieldProps: FieldInputProps<string | number | readonly string[] | undefined>;
  touched?: boolean;
  error?: string;
  placeholder?: string;
  Ibg?: string;
  style?: { heading?: any; input?: any };
  className?: string;
}

export const InputTemp = ({
  heading,
  type,
  fieldProps,
  touched,
  error,
  placeholder,
  Ibg = "",
  style = { heading: { fontWeight: 600 } },
  className,
}: Props) => {
  //TODO switch ibg to inputprops
  return (
    <div className='w-full'>
      <div className='flex justify-between mb-1'>
        <p {...style.heading}>{heading}</p>
        {touched && error && (
          <p className='text-neutral-500 text-center italic text-sm'>{error}</p>
        )}
      </div>
      <input
        className={`rounded-lg w-full py-2 px-4 bg-white outline-none ${className}`}
        type={type}
        {...fieldProps}
        placeholder={placeholder}
        {...style.input}
      />
    </div>
  );
};
