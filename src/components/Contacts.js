import React, { useState, useEffect } from "react";

const Contacts = () => {
  const [hasError, setErrors] = useState(false);
  const [contacts, setContacts] = useState({});

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      res
        .json()
        .then((res) => setContacts(res))
        .catch((err) => setErrors(err));
    }

    fetchData();
  });

  return (
    <div>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            Name: {contact.name}, Email: {contact.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contacts;
