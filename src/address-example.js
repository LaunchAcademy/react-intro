import React from 'react'
import AddressForm from './address-form'
import AddressBlock from './address-block'

class AddressExample extends React.Component {
  constructor(props) {
    super(props)
    this.updateAddressBlock = this.updateAddressBlock.bind(this)
  }

  updateAddressBlock(event) {
    event.preventDefault()
    alert('called here')
  }

  render() {
    return (
      <div>
        <AddressForm onSubmit={this.updateAddressBlock}/>
        <AddressBlock name={ 'Jon Snow'} state={'TN'} street={'Winterfell'} city={'Wallerton'} postalCode={'02342'}/>
      </div>
    )
  }
}

export default AddressExample