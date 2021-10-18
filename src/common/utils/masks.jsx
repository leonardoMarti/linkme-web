import MaskedInput from "react-text-mask";
import { REGEX } from "./regex";

export const MaskDate = ({ register, ...other }) => {
  return (
    <MaskedInput
      {...other}
      ref={register}
      mask={REGEX.date}
      placeholderChar={"\u2000"}
      showMask
      guide={false}
    />
  );
};
