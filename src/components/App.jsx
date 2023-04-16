import React from "react";
import { nanoid } from "nanoid";

import { Form } from "./Form/Form";
import { Contacts } from "./Contacts/Contacts";
import { Filter } from "./Filter/Filter";
import { Title } from "./App.styled";

export class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
  }

  componentDidMount() { 
    const contactsBook = JSON.parse(localStorage.getItem("contacts"));
    if (contactsBook) {this.setState({contacts: contactsBook})}
  }

  componentDidUpdate(prevProps, prevState) { 
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts))
    }
  }

  addContact = (name, number) => { 
    const contact = {
      id: nanoid(),
      name: name,
      number: number,
    }
    const isNameInContacts = this.state.contacts.filter(item => item.name === name).length;

      (isNameInContacts) ?
      alert("This name is already in contacts"):
      this.setState((prevState) => ({ contacts: [contact, ...prevState.contacts] }))
  }

  deleteContact = (id) => { 
    this.setState((prevState) => ({ contacts: prevState.contacts.filter(item => item.id !== id) }))
  }

  toFilter = (text) => { 
    this.setState({filter: text})
  }

  render() { 
    return(
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Title>Phonebook</Title>  
        <Form add={this.addContact} />

      <Title>Contacts</Title>
        <Filter text={this.state.filter} toFilter={this.toFilter} />
        <Contacts contacts={this.state.contacts} filter={this.state.filter} del={ this.deleteContact} />
    </div>
  );
  }
};
