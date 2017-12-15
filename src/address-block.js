import React from 'react'

let AddressBlock = (props) => {
  return (
    <div>
      {props.name}<br />
      {props.street}<br />
      {props.city}, {props.state}, {props.postalCode}
    </div>
  )
}

export default AddressBlock