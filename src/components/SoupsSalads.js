import React from 'react'
import MenuItemCard from './MenuItemCard'

const SoupsSalads = () => (
  <div style={{ textAlign: 'left' }}>
    <p style={{ textAlign: 'left', fontSize: '20px' }}>enjoy before your main course</p>
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
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

export default SoupsSalads
