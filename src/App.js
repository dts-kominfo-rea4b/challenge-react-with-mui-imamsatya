import './App.css';
import React, { useState } from "react";

import Grid from '@mui/material/Grid';
import ContactForm from './components/ContactForm';
import Contact from './components/Contact';
import Header from './components/Header';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// Uncomment untuk memuat daftar kontak
import contactsJSON from './data/contacts.json';
const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm
  const [listContact, setContact] = useState(contactsJSON);
  const addContact = (data) => {
    const newContact = [...listContact, data];
    setContact(newContact);
  };
  return (
    <div className="App">
     <Header></Header>
      <br></br>
      <br></br>
      <Grid container spacing={2}>
        <Grid item xs={6} style={{padding: '40px'}}>
          <ContactForm addContact={addContact}></ContactForm>
        </Grid>
        <Grid item xs={6} style={{padding: '40px'}}>
        <div><Card sx={{ minWidth: 275 }}>
        <CardContent>

        {listContact.map((item, index) => {
              return (
               
                  <Contact data={item} key={index} />
         
              );
            })}
       

           
        </CardContent>
        <CardActions>
          {/* <Button style={{color: 'green'}}  size="small">ADD NEW</Button> */}
        </CardActions>
      </Card></div>
         
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
