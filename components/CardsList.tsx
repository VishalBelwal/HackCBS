'use client'
import React from 'react'
import { Cards } from './Cards'

export const CardsList = () => {
  return (
    <section className='grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4'>
        <Cards 
            img='/icons/dashboard.svg'
            title='Go To Dashboard'
            className='bg-orange-400'
            handleClick={() => {}}
        />
    </section>
  )
}