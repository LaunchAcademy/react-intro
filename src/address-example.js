import React from 'react'
import AddressForm from './address-form'
import AddressBlock from './address-block'

class AddressExample extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      address: {}
    }
    this.updateAddressBlock = this.updateAddressBlock.bind(this)
  }

  updateAddressBlock(key, value) {
    let address = this.state.address
    address[key] = value
    this.setState(address: address)
  }

  render() {
    return (
      <div>
        <AddressForm onInputChange={this.updateAddressBlock}/>
        <AddressBlock {...this.state.address } />
      </div>
    )
  }
}

export default AddressExample