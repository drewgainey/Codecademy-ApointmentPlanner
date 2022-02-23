import React, { useState } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
  const [contacts, setContacts] = useState([{name: 'Drew', phone: '911', email: 'hello@gmail.com'}]);
  const [appointments, setApointments] = useState([]);

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  /*
  Implement functions to add data to
  contacts and appointments
  */
  const addContacts = (name, phone, email) => {
    const newContact = {
      name: name, 
      phone: phone,
      email: email
    }
    setContacts((prev) => [...prev, newContact]);
  }
  const addApointments = (title, contact, date, time) => {
    const newApointment = {
      title: title,
      contact: contact, 
      date: date, 
      time: time
    }
    setApointments((prev) => [...prev, newApointment]);
  }

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
             {/* Add props to ContactsPage */}
            <ContactsPage
            contacts={contacts}
            addContacts={addContacts} />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* Add props to AppointmentsPage */}
            <AppointmentsPage
            appointments={appointments}
            addApointment={addApointments} />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
