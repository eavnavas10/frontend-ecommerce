import React from 'react'
import { UilAnnoyed } from '@iconscout/react-unicons'
import "./styles/NotFoundPage.css"

export const NotFoundPage = () => {
  return (
    <>
      <div className="not-found-page-container">
        <h1> 
          <span style={{fontSize:'70px'}}>📦</span>
          <span style={{color:'red'}}>Error 404&nbsp;</span>
          <span style={{color:'#555'}}>Not found page&nbsp;</span> 
          <UilAnnoyed size="30" color="currentColor" /></h1>
      </div>
    </>
  )
}
