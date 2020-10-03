import React from "react";
import styled, { css } from "styled-components";
import { useState, useEffect } from "react";

export default function Calendar() {
  const DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const DAYS_LEAP = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const DAYS_OF_THE_WEEK = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  const MONTHS = [
    "JANUARY",
    "FEBRUARY",
    "MARCH",
    "APRIL",
    "MAY",
    "JUNE",
    "JULY",
    "AUGUST",
    "SEPTEMBER",
    "OCTOBER",
    "NOVEMBER",
    "DECEMBER",
  ];

  const today = new Date();
  const [date, setDate] = useState(today);
  const [day, setDay] = useState(date.getDate());
  const [month, setMonth] = useState(date.getMonth());
  const [year, setYear] = useState(date.getFullYear());
  const [startDay, setStartDay] = useState(getStartDayOfMonth(date));

  useEffect(() => {
    setDay(date.getDate());
    setMonth(date.getMonth());
    setYear(date.getFullYear());
    setStartDay(getStartDayOfMonth(date));
  }, [date]);

  function getStartDayOfMonth(date: Date) {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  }

  function isLeapYear(year: number) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }

  const days = isLeapYear ? DAYS_LEAP : DAYS;

  return (
    <Frame>
      <Header>
        <Button onClick={() => setDate(new Date(year, month - 1, day))}>
          <i class="fas fa-angle-double-left"></i>
        </Button>

        <Button onClick={() => setDate(new Date(year, month + 1, day))}>
          <i class="fas fa-angle-double-right"></i>
        </Button>
        <BigCircle>
          <SmallCircle></SmallCircle>
        </BigCircle>
        <Month>{MONTHS[month]}</Month>
      </Header>

      <Body>
        {DAYS_OF_THE_WEEK.map((d) => (
          <Day key={d}>
            <strong>{d}</strong>
          </Day>
        ))}

        {Array(days[month] + (startDay - 1))
          .fill(null)
          .map((_, index) => {
            const d = index - (startDay - 2);
            return (
              <Day
                key={index}
                isToday={d === today.getDate()}
                isSelected={d === day}
                onClick={() => setDate(new Date(year, month, d))}
              >
                {d > 0 ? d : ""}
              </Day>
            );
          })}
      </Body>
    </Frame>
  );
}

const Frame = styled.div`
  width: 350px;
  height: 600px;
  border: 1px solid lightgrey;
  box-shadow: 2px 2px 2px #eee;
  background: #3a415f;
  border-radius: 50px;
  margin: auto;
  box-shadow: -3px 3px 20px 1px #000;
`;

const Header = styled.div`
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  height: 30%;
  background-color: #42cd7d;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  position: relative;
`;

const Button = styled.div`
  cursor: pointer;
  padding: 30px;
`;
const BigCircle = styled.div`
  position: absolute;
  left: 30%;
  bottom: -40%;
  background-color: #3a415f;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  box-shadow: 3px 3px 20px 1px #000;
`;
const SmallCircle = styled.div`
  border-radius: 50%;
  width: 120px;
  height: 120px;
  background-color: #3a415f;
  margin: auto;
  margin-top: 15px;
  box-shadow: 2px 2px 5px 1px #000;
`;

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  color: #fff;
  margin-top: 120px;
  padding: 30px;
`;

const Month = styled.div`
  display: block;
  color: #fff;
  width: 100%;
  position: absolute;
  left: 50%;
  top: 250px;
  margin-top: 20px;
`;

const Day = styled.div`
  width: 14.2%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  display: block;
  color: #fff;

  ${(props) =>
    props.isToday &&
    css`
      border: 1px solid #000;
    `}

  ${(props) =>
    props.isSelected &&
    css`
      background-color: #000;
    `}
`;
