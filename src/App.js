import React, { Component } from 'react';
import SearchBar from './component/SearchBar';
import ContactCard from './component/ContactCard';
import './style/Contacts.css';

const contactsAPI = 'http://jsonplaceholder.typicode.com/users';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      searchResult: [],
      contactList: []
    }
    this.handleSearch = this.handleSearch.bind(this);
    this.returnContactList = this.returnContactList.bind(this);
  }

  handleSearch(searchText) {
    this.setState({searchResult: [], searchText: searchText});
    this.state.contactList.map(contact => {
      if(searchContact(contact, searchText)) {
         this.setState( prevState => ({
           searchResult: [...prevState.searchResult, contact]
         }), () => console.log(this.state.searchResult))
      }
    })
  }

  componentWillMount() {
    let init = {
         method: 'GET',
         headers: new Headers(),
         mode: 'cors',
         cache: 'default' 
      };

    fetch(contactsAPI, init)
      .then( response => response.json())
      .then( 
        data => this.setState( 
          prevState => ({
          contactList: [...data]
          }) 
        )
      )
    }

  returnContactList() {
   return this.state.searchText ? this.state.searchResult :this.state.contactList
  }
  render() {
    return (
      <div className="row">
        <div className="col-xs-4 col-sm-4 col-md-4">
          <span className="title">Contacts: {this.returnContactList().length}</span>
          <SearchBar onSearch={this.handleSearch} />
          <ul className="list-group" id="contact-list">
            { this.returnContactList().map(
                (contact) =>
                  <li key={contact.id} className="list-group-item" style={{textAlign: 'right'}}>
                      <a data-toggle="collapse" href={'#' + contact.username.trim().replace('.', "")} aria-expanded="false" aria-controls={contact.username.trim().replace('.', "")}  style={{width:160,fontSize: 14}}>
                          {contact.name}
                      </a><p></p>
                      <ContactCard contact={contact} />
                  </li>
              )
            }
          </ul>
        </div>
      </div>
    );
  }
}

const searchContact = (contact, searchText) => (
 contact.name.toLowerCase().search(searchText.toLowerCase()) != -1 ||
 contact.email.toString().search(searchText) != -1
)
export default App;
