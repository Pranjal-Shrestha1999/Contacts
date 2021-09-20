import React from 'react'
import Avatar from '../components/Avatar'
import EditIcon from '../components/icons/Edit'
import CloseIcon from '../components/icons/Close'
import MailIcon from '../components/icons/Mail'
import PhoneIcon from '../components/icons/Phone'
import Availability from '../components/Availability'

const ViewContact = ({ name = 'Tushar T Bohara', mail = 'Tushar.bohara@oxygenmedia.com', phone = '+216 XXX XXX', availability = false }) => {
  return (
    <div className="contact-verify">
      <div className="icons">
        <EditIcon />
        <CloseIcon />
      </div>

      <div className="head">
        <Avatar variant="large" label={name[0]} />
        {/* {availability && <Availability active={availability} />} */}
         <Availability active={availability} />
        <p className="name">{name}</p>
      </div>

      <hr className="divider" />

      <div>
        <Property type="mail" data={mail} />
        <Property type="mail" data={mail} />
        <Property type="phone" data={phone} />
        <Property type="phone" data={phone} />
      </div>
    </div>
  )
}

export default ViewContact

const Property = ({ type, data }) => {
  return (
    <div className="property">
      {type === 'mail' ? (
        <>
          <div className="icon">
            <MailIcon />
          </div>
          <p className="text">{data}</p>
        </>
      ) : (
        <>
          <div className="icon">
            <PhoneIcon />
          </div>
          <p className="text">{data}</p>
        </>
      )}
    </div>
  )
}
