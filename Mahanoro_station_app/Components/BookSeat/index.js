import React from "react";
import { Group, Title, SubGroup, PickSeat, Info, InfoContent, Container, SubTitle, Seats } from "../BookSeat/style/bookSeat";

export default function BookSeat({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

BookSeat.Title = function BookSeatTitle({children, ...restProps}) {
    return <Title {...restProps} >{children}</Title>
}

BookSeat.SubTitle = function BookSeatSubTitle({children, ...restProps}) {
    return <SubTitle {...restProps} >{children}</SubTitle>
}

BookSeat.Group = function BookSeatGroup({children, ...restProps}) {
    return <Group {...restProps} >{children}</Group>
}

BookSeat.Seats = function BookSeatSeats({children, ...restProps}) {
    return <Seats {...restProps} >{children}</Seats>
}

BookSeat.SubGroup = function BookSeatSubGroup({children, ...restProps}) {
    return <SubGroup {...restProps} >{children}</SubGroup>
}
BookSeat.PickSeat = function BookSeatPickSeat({children, ...restProps}) {
    return <PickSeat {...restProps} >{children}</PickSeat>
}
BookSeat.Info = function BookSeatInfo({children, ...restProps}) {
    return <Info {...restProps} >{children}</Info>
}
BookSeat.InfoContent = function BookSeatInfoContent({children, ...restProps}) {
    return <InfoContent {...restProps} >{children}</InfoContent>
}