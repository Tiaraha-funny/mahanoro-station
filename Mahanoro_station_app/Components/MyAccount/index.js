import React from "react";
import { Title, Container, Group, SubGroup, Input, Label, Form, Cancel, SubmitBtn, Wrapper,Info } from "../MyAccount/style/account";

export default function MyAccountStyle({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

MyAccountStyle.Title = function MyAccountStyleTitle({children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>
}

MyAccountStyle.Cancel = function MyAccountStyleCancel({children, ...restProps}) {
    return <Cancel {...restProps}>{children}</Cancel>
}

MyAccountStyle.Group = function MyAccountStyleGroup({children, ...restProps}) {
    return <Group {...restProps}>{children}</Group>
}
MyAccountStyle.SubGroup = function MyAccountStyleSubGroup({children, ...restProps}) {
    return <SubGroup {...restProps}>{children}</SubGroup>
}

MyAccountStyle.Input = function MyAccountStyleInput({children, ...restProps}) {
    return <Input {...restProps}>{children}</Input>
}

MyAccountStyle.Label = function MyAccountStyleLabel({children, ...restProps}) {
    return <Label {...restProps}>{children}</Label>
}

MyAccountStyle.Form = function MyAccountStyleForm({children, ...restProps}) {
    return <Form {...restProps}>{children}</Form>
}

MyAccountStyle.SubmitBtn = function MyAccountStyleSubmitBtn({children, ...restProps}) {
    return <SubmitBtn {...restProps}>{children}</SubmitBtn>
}

MyAccountStyle.Info = function MyAccountStyleInfo({children, ...restProps}) {
    return <Info {...restProps}>{children}</Info>
}

MyAccountStyle.Wrapper = function MyAccountStyleWrapper({children, ...restProps}) {
    return <Wrapper {...restProps}>{children}</Wrapper>
}