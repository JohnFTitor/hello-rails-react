import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";
import { getGreeting } from "../redux/greeting/greeting";
import PropTypes from "prop-types"

const Greeting = () => {
  const greeting = useSelector((state) => state.greeting);
  const dispatch = useDispatch();

  useEffect(async () => {
    await dispatch(getGreeting());
  }, []);

  return (
    <h1> { greeting } </h1>
  );
}

export default Greeting
