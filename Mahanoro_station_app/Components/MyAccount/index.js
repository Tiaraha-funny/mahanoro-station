import React from "react";
import MyAccount from "../../Pages/MyAccount";
import { Title } from "../Header/Styles/Header";

export default function MyAccountStyle({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

MyAccount.Title = function MyAccountTitle({children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>
}

MyAccount.Group = function MyAccountGroup({children, ...restProps}) {
    return <Group {...restProps}>{children}</Group>
}
MyAccount.SubGroup = function MyAccountSubGroup({children, ...restProps}) {
    return <SubGroup {...restProps}>{children}</SubGroup>
}
MyAccount.Input = function MyAccountInput({children, ...restProps}) {
    return <Input {...restProps}>{children}</Input>
}