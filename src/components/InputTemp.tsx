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
      <div className='flex justify-between'>
        <p {...style.heading}>{heading}</p>
        {touched && error && (
          <p className='text-neutral-500 text-center italic text-sm'>{error}</p>
        )}
      </div>
      <input
        className={`rounded-md w-full py-1 px-2 ring-1 ring-neutral-300 outline-none ${className}`}
        type={type}
        {...fieldProps}
        placeholder={placeholder}
        {...style.input}
      />
    </div>
  );
};
