import * as React from "react";
import { useState } from "react";
import { Input } from "@rneui/base";

const CustomInput = ({ placeholderText }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <Input
      containerStyle={{}}
      disabledInputStyle={{ background: "#ddd" }}
      inputContainerStyle={{
        paddingHorizontal: 10,
        backgroundColor: "lightblue",
        borderRadius: 5,
        height: 55,
        borderWidth: isFocused ? 2 : 0,
        borderColor: isFocused ? "#1F41BB" : "transparent", 
        borderBottomWidth:isFocused?2.5:0,
      }}
      onFocus={handleFocus}
      onBlur={handleBlur}
      errorStyle={{}}
      errorProps={{}}
      inputStyle={{}}
      labelStyle={{}}
      labelProps={{}}
      leftIconContainerStyle={{}}
      rightIconContainerStyle={{}}
      placeholder={placeholderText}
    />
  );
};

export default CustomInput;
