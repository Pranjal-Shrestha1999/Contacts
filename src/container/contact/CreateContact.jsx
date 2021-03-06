import React, { useState } from 'react'
import IntlTelInput from 'react-intl-tel-input'
import Button from '../../components/Button'
import 'react-intl-tel-input/dist/main.css'

import AddIcon from '../../components/icons/Add'
import MailIcon from '../../components/icons/Mail'
import PhoneIcon from '../../components/icons/Phone'
import CloseIcon from '../../components/icons/Close'

const CreateContact = ({ setScreen }) => {
  const [formdata, setFormdata] = useState({ firstName: '', lastName: '', midName: '' })
  const [emails, setEmails] = useState([])
  const [phones, setPhones] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('form submitted', 'Formdata:', formdata, 'Emails: ',emails, 'Phones', phones)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormdata({ ...formdata, [name]: value })
  }
  console.log(formdata)

  const email_list = (data) => {
    setEmails(data)
  }
  const phone_list = (data) => {
    setPhones(data)
  }
  return (
    <div className="contact-add">
      <div className="contact--header">
        <p>Add Contact</p>
      </div>

      <form onSubmit={handleSubmit}>
        <fieldset>
          <p className="details">Details</p>
          <input
            type="text"
            name="firstName"
            className="input"
            placeholder="First name"
            value={formdata.firstname}
            onChange={(e) => handleChange(e)}
            required
          />
          <input
            type="text"
            name="lastName"
            className="input"
            placeholder="Last name"
            value={formdata.lastName}
            onChange={(e) => handleChange(e)}
            required
          />
          <input
            type="text"
            name="midName"
            className="input"
            placeholder="Middle name"
            value={formdata.midName}
            onChange={(e) => handleChange(e)}
          />
        </fieldset>

        <fieldset>
          <EmailInput func={email_list} />
        </fieldset>

        <fieldset>
          <PhoneInput func={phone_list} />
        </fieldset>

        <div className="buttons">
          <Button type="button" variant="outlined" size="small" onClick={() => setScreen('main')}>
            Cancel
          </Button>
          <Button type="submit" variant="primary" size="default">
            Verify
          </Button>
        </div>
      </form>
    </div>
  )
}

export default CreateContact

const AddBtn = ({ type, ...props }) => {
  return (
    <div className="add" {...props}>
      <AddIcon />
      {type === 'mail' && <MailIcon />}
      {type === 'phone' && <PhoneIcon />}
    </div>
  )
}

const EmailInput = (props) => {
  const [emailList, setEmailList] = useState([{ id: '', email: '' }])

  const handleChange = (e, i) => {
    const val = e.target.value
    const list = [...emailList]
    list[i]['email'] = val
    list[i]['id'] = i
    setEmailList(list)
  }

  const handleRemove = (i) => {
    const list = [...emailList]
    list.splice(i, 1)
    setEmailList(list)
  }
  const handleAdd = () => {
    setEmailList([...emailList, { id: '', email: '' }])
  }
  props.func(emailList)
  // console.log(JSON.stringify(emailList))
  return (
    <div>
      <p className="details">Email</p>

      {emailList.map((x, i) => (
        <div>
          <input
            type="email"
            name="email"
            className="input"
            value={x.email}
            onChange={(e) => handleChange(e, i)}
            placeholder="Email address"
          />
          {emailList.length !== 1 && <CloseIcon onClick={handleRemove} />}
          {emailList.length - 1 === i && <AddBtn type="mail" onClick={handleAdd} />}
        </div>
      ))}
    </div>
  )
}

const PhoneInput = (props) => {
  const [phoneList, setPhoneList] = useState([{ id: '', phone: '', label: 'Home' }])

  const handlePhoneChange = (f, i) => {
    // const {name, value} = e.target
    const list = [...phoneList]
    list[i]['phone'] = f
    list[i]['id'] = i
    setPhoneList(list)
  }

  const handleLabelChange = (e, i) => {
    const { name, value } = e.target
    const list = [...phoneList]
    list[i][name] = value
    setPhoneList(list)
  }

  const handleRemove = (i) => {
    const list = [...phoneList]
    list.splice(i, 1)
    setPhoneList(list)
  }

  const handleAdd = () => {
    setPhoneList([...phoneList, { id: '', phone: '', label: 'Home' }])
  }
  props.func(phoneList)
  // console.log(JSON.stringify(phoneList))
  return (
    <div>
      <p className="details">Phone numbers</p>
      {phoneList.map((x, i) => (
        <div key={i}>
          <IntlTelInput
            preferredCountries={['us', 'np']}
            format={true}
            name="phone"
            value={x.phone}
            onPhoneNumberChange={(e, f) => handlePhoneChange(f, i)}
            className="input"
          />
          <div>
            <label htmlFor="label">Label: </label>
            <select name="label" className="input" id="label" onChange={(e) => handleLabelChange(e, i)}>
              <option value="home">Home</option>
              <option value="mobile">Mobile</option>
              <option value="work">Work</option>
              <option value="main">Main</option>
              <option value="fax">Fax</option>
              <option value="other">Custom</option>
            </select>
          </div>
          {phoneList.length !== 1 && <CloseIcon onClick={handleRemove} />}
          {phoneList.length - 1 === i && <AddBtn type="mail" onClick={handleAdd} />}
        </div>
      ))}
    </div>
  )
}
