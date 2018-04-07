import React from 'react'
import lorem from 'lorem-ipsum'

const MenuItemCard = () => (
  <div style={{ width: '550px', paddingTop: '20px', paddingBottom: '20px' }}>
    <div style={{ marginLeft: '30px' }}>
      <div style={{ width: '50%', fontSize: '20px' }}>
        <strong>{lorem({ count: 9, units: 'words' })}</strong>
      </div>
      <div style={{ width: '50%' }}>{lorem({ count: 5, units: 'words' })}</div>
    </div>
  </div>
)

export default MenuItemCard
