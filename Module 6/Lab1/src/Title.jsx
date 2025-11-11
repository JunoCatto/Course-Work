import React from 'react'
import viteLogo from '/vite.svg'

export const Title = ({title, ReactLogo}) => {
    return (
        <>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          {ReactLogo}
          <h1>{title}</h1>
        </>
    );
};