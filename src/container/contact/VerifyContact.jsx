import React from 'react'
import Button from '../../components/Button'
import Avatar from '../../components/Avatar'
import EditIcon from '../../components/icons/Edit'
import CloseIcon from '../../components/icons/Close'
import MailIcon from '../../components/icons/Mail'
import PhoneIcon from '../../components/icons/Phone'

const Addcontacts = ({
  name = 'Tushar T Bohara',
  mail = 'Tushar.bohara@oxygenmedia.com',
  phone = '+216 XXX XXX',
  setScreen,
}) => {
  return (
    <div className="contact-view">
      <div className="icons">
        <EditIcon onClick={() => setScreen('edit')} />
        <CloseIcon className="icon2" onClick={() => setScreen('main')} />
      </div>

      <div className="head">
        <Avatar variant="large" label={name[0]} />
        <p className="name">{name}</p>
      </div>

      <hr className="divider" />

      <div>
        <Property type="mail" data={mail} />
        <Property type="mail" data={mail} />
        <Property type="phone" data={phone} />
        <Property type="phone" data={phone} />
      </div>

      <div className="buttons">
        <Button variant="outlined" size="small" onClick={() => setScreen('main')}>
          Cancel
        </Button>
        <Button variant="secondary" size="default" onClick={() => setScreen('view')}>
          Save
        </Button>
      </div>
    </div>
  )
}

export default Addcontacts

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
