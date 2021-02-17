import React from "react";
import { Wrapper, Group, Title, SubGroup, PickSeat, SecondInfo,Unavailable, Info, Span, InfoContent,InfoContentTitle,Description, Container, SubTitle, Seats, SubInfo, GroupTitle } from "../BookSeat/style/bookSeat";

export default function BookSeat({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

BookSeat.Title = function BookSeatTitle({children, ...restProps}) {
    return <Title {...restProps} >{children}</Title>
}

BookSeat.Unavailable = function BookSeatUnavailable({children, ...restProps}) {
    return <Unavailable {...restProps} />
}

BookSeat.Span = function BookSeatSpan({children, ...restProps}) {
    return <Span {...restProps} >{children}</Span>
}

BookSeat.InfoContentTitle = function BookSeatInfoContentTitle({children, ...restProps}) {
    return <InfoContentTitle {...restProps} >{children}</InfoContentTitle>
}

BookSeat.Description = function BookSeatDescription({children, ...restProps}) {
    return <Description {...restProps} >{children}</Description>
}

BookSeat.Wrapper = function BookSeatWrapper({children, ...restProps}) {
    return <Wrapper {...restProps} >{children}</Wrapper>
}

BookSeat.SubTitle = function BookSeatSubTitle({children, ...restProps}) {
    return <SubTitle {...restProps} >{children}</SubTitle>
}

BookSeat.Group = function BookSeatGroup({children, ...restProps}) {
    return <Group {...restProps} >{children}</Group>
}

BookSeat.GroupTitle = function BookSeatGroupTitle({children, ...restProps}) {
    return <GroupTitle {...restProps} >{children}</GroupTitle>
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

BookSeat.SecondInfo = function BookSeatSecondInfo({children, ...restProps}) {
    return <SecondInfo {...restProps} >{children}</SecondInfo>
}

BookSeat.SubInfo = function BookSeatSubInfo({children, ...restProps}) {
    return <SubInfo {...restProps} >{children}</SubInfo>
}

BookSeat.InfoContent = function BookSeatInfoContent({children, ...restProps}) {
    return <InfoContent {...restProps} >{children}</InfoContent>
}