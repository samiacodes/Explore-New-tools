import React from 'react'
import { useSelector } from 'react-redux';

export const NavBar = () => {
    const count = useSelector((state) => state.counter.value);
  return (
    <div>I am from NavBar Count {count}</div>
  )
}
