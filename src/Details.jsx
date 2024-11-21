import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Details() {

  return (
    <>
      <div className="top-area">
        <h1>Details</h1>
        <div className="book-area">
          <p className="title">title</p>
          <p>\1000</p>
          <button className="button">詳細</button>
        </div>
      </div>
    </>
  )
}

export default Details
