import './App.css'
import React from 'react'
import CheckOutProcess from './components/checkout'

const App = () => {
  const CHECKOUT_STEPS =[
    {
      name:'Customer Info',
      component:()=><div>Provide Your Contact Details</div>
    },
    {
      name:'Shipping Info',
      component:()=><div>Enter Your Shipping Address</div>
    },
    {
      name:'Payment',
      component:()=><div>Complete Payment for Your Order</div>
    },
    {
      name:'Delivered',
      component:()=><div>Your Order Has Been Delivered</div>
    },
  ]
  return (
    <div className='card'>
      <center>
      <h2 >Check Out Process</h2>
      </center>
      
      <CheckOutProcess stepsToConfig = {CHECKOUT_STEPS}/>
      
      
    </div>
  )
}

export default App
