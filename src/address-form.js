import React from 'react'

class AddressForm extends React.Component {
  constructor(props) {
    super(props)
    this.triggerChange = this.triggerChange.bind(this)
  }

  triggerChange(event) {
    this.props.onInputChange(event.currentTarget.name, event.currentTarget.value)
  }

  render(){
    return (<form id="address-form">
      <p>
        <label for="name">Name</label>
        <input type="text" name="name" id="name" onChange={this.triggerChange}  />
      </p>

      <p>
        <label for="street">Street</label>
        <input type="text" name="street" id="street"  onChange={this.triggerChange}  />
      </p>

      <p>
        <label for="city">City</label>
        <input type="text" name="city" id="city"  onChange={this.triggerChange}  />
      </p>

      <p>
        <label for="state">State</label>
        <input type="text" name="state" id="state" maxlength="2"  onChange={this.triggerChange}  />
      </p>

      <p>
        <label for="postal-code">Postal Code</label>
        <input type="text" name="postal_code" id="postal_code"   onChange={this.triggerChange} />
      </p>

      <input type="submit" value="Submit" />
    </form>)
  }

}

export default AddressForm