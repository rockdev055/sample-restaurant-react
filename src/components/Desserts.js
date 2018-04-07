import React from 'react'
import MenuItemCard from './MenuItemCard'

const Desserts = () => (
  <div style={{ textAlign: 'left' }}>
    <p style={{ textAlign: 'left', fontSize: '20px' }}>your main dish</p>
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <MenuItemCard />
      <MenuItemCard />
      <MenuItemCard />
      <MenuItemCard />
      <MenuItemCard />
      <MenuItemCard />
      <MenuItemCard />
      <MenuItemCard />
      <MenuItemCard />
      <MenuItemCard />
    </div>
  </div>
)

export default Desserts
