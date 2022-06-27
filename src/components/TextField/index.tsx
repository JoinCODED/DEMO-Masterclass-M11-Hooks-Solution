import clsx from "clsx";

import "./style.scss";

type TextFieldProps = JSX.IntrinsicElements["input"] & {
  helperText?: string;
  error?: boolean;
};

const TextField = (props: TextFieldProps) => {
  const {
    className,
    error = false,
    helperText,
    type = "text",
    ...inputProps
  } = props;

  return (
    <div>
      <input
        {...inputProps}
        className={clsx([className, error && "error"])}
        type={type}
      />
      {helperText && <p>{helperText}</p>}
    </div>
  );
};

export default TextField;
