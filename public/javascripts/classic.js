let addressForm = document.getElementById('address-form')

addressForm.addEventListener('submit', (event) => {
  event.preventDefault()
  alert('submit')

  let name = document.getElementById('name').value
  let street = document.getElementById('street').value
  let city = document.getElementById('city').value
  let state = document.getElementById('state').value
  let postalCode = document.getElementById('postal-code').value

  let address = {
    name: name,
    street: street,
    city: city,
    state: state,
    postalCode: postalCode
  }

  populateLabel(address)
})

let populateLabel = (address) => {
  let addressBlock = document.getElementById('addresses')
  addressBlock.innerHTML += '<p>'
  addressBlock.innerHTML += address.name + '<br>'
  addressBlock.innerHTML += address.street + '<br>'
  addressBlock.innerHTML += address.city + ", " +
    address.state + address.postalCode
  addressBlock.innerHTML += "</p>"
}