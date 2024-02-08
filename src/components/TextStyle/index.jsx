import React from "react";

const sizeClasses = {
  txtExo2RomanExtraBold64Gray5002: "font-exo font-extrabold",
  txtMontserratRomanBold24: "font-bold font-montserrat",
  txtMontserratRomanRegular16WhiteA700: "font-montserrat font-normal",
  txtExo2RomanExtraBold72WhiteA700: "font-exo font-extrabold",
  txtMontserratRomanBold20: "font-bold font-montserrat",
  txtExo2RomanExtraBold64IndigoA400: "font-exo font-extrabold",
  txtExo2RomanExtraBold64: "font-exo font-extrabold",
  txtMontserratRomanRegular24Gray40001: "font-montserrat font-normal",
  txtMontserratRomanRegular20Gray20001: "font-montserrat font-normal",
  txtMontserratRomanMedium18: "font-medium font-montserrat",
  txtPoppinsSemiBold6: "font-poppins font-semibold",
  txtMontserratRomanRegular24Gray500: "font-montserrat font-normal",
  txtMontserratRomanRegular20Gray900: "font-montserrat font-normal",
  txtMontserratRomanSemiBold18: "font-montserrat font-semibold",
  txtMontserratRomanMedium12: "font-medium font-montserrat",
  txtExo2RomanExtraBold72Blue100: "font-exo font-extrabold",
  txtMontserratRomanBold20Deeppurple800: "font-bold font-montserrat",
  txtMontserratRomanRegular20: "font-montserrat font-normal",
  txtMontserratRomanBold32: "font-bold font-montserrat",
  txtMontserratRomanRegular24: "font-montserrat font-normal",
  txtMontserratRomanExtraBold32: "font-extrabold font-montserrat",
  txtMontserratRomanRegular18: "font-montserrat font-normal",
  txtMontserratRomanRegular16: "font-montserrat font-normal",
  txtTheGirlNextDoor20: "font-normal font-thegirlnextdoor",
  txtExo2RomanExtraBold72: "font-exo font-extrabold",
  txtMontserratRomanBold20WhiteA700: "font-bold font-montserrat",
  txtExo2RomanExtraBold72Gray20001: "font-exo font-extrabold",
  txtMontserratRomanMedium20: "font-medium font-montserrat",
  txtMontserratRomanMedium24: "font-medium font-montserrat",
};

const TextStyle = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { TextStyle };