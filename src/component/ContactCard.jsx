import React from 'react';
import '../style/Contacts.css';
const ContactCard = ({contact}) => {
	return(
		<div className="collapse" id={contact.username.trim().replace('.', "")}>
			<div className="card card-block" style={{width:400, bottom:0, border: 0, borderRadius: 0, backgroundColor: "#4E95C6", color:'white', fontSize: 18, textAlign: 'right'}}>
                {contact.username}
			</div>
			<div className="card" style={{width:400, border: 0, borderRadius: 0,backgroundColor: "#4E95C6", color:'white', fontSize: 12, textAlign: 'right'}}>
                {contact.website}
			</div>
			<div className="card" style={{width:400, border: 0, borderRadius: 0,backgroundColor: "#000000", color:'white', fontSize: 12, textAlign: 'right'}}>
                {contact.phone} | {contact.email}
			</div>
			<div className="card" style={{width:400, border: 0, borderRadius: 0,backgroundColor: "#000000", color:'white', fontSize: 12, textAlign: 'right'}}>
				{contact.address.street}, {contact.address.city}, {contact.address.zipcode}
			</div>
		</div>
    )
}
export default ContactCard;