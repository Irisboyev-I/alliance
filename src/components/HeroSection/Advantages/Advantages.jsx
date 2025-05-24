import React from 'react'
import { advantages } from "../../../constants/data.js"
import "./Advantages.scss"

function Advantages({ textColors }) {
  return (
    <div className={`advantagesContainer ${textColors}`}>
      {advantages.map(({ id, icon: Icon, title }) => (
        <div className="box" key={id}>
          <Icon className='icon' />
          <p className="text-center text-sm">{title}</p>
        </div>
      ))}
    </div>
  )
}

export default Advantages