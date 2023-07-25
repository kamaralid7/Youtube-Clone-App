import React from 'react'
import Button from './Button'

const ButtonList = () => {
  return (
    <div className='flex'>
        <Button name='All' />
        <Button name='Gaming'/>
        <Button name='Music'/>
        <Button name='Sahrukh Khan'/>
        <Button name='Salman Khan'/>
        <Button name='Amir Khan'/>
        <Button name='Watched'/>
        <Button name='New to you'/>
        <Button name='Recently Uploaded'/>
    </div>
  )
}

export default ButtonList