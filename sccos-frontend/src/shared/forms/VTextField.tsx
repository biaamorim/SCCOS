import { TextField, TextFieldProps } from "@mui/material";
import { useField } from "@unform/core";
import { ReactNode, useEffect, useState } from "react";

interface Props {
  children: ReactNode;
}

type TVTextFieldProps = TextFieldProps & {
  name: string;
};

function VTextField({ name, ...rest }: TVTextFieldProps) {
  const { fieldName, registerField, defaultValue, error, clearError } =
    useField(name);
  const [value, setValue] = useState(defaultValue || "");

  useEffect(() => {
    registerField({
      name: fieldName,
      getValue: () => value,
      setValue: (_, newValue) => setValue(newValue),
    });
  }, [registerField, fieldName, value]);

  return (
    <TextField
      {...rest}
      error={!!error}
      helperText={error}
      defaultValue={defaultValue}
      onKeyDown={() => (error ? clearError() : undefined)}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}

export default VTextField;
