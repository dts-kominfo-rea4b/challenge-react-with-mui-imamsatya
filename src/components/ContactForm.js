// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
const ContactForm = ({addContact}) => {
    // Form berisi name, phone, email, dan photo url
    // Buatlah state newContact berupa objek sesuai dengan data yang ada
    const handleSubmit = () => {
        const name = document.querySelector("#name");
        const phone = document.querySelector("#phone");
        const email = document.querySelector("#email");
        const photo = document.querySelector("#photoUrl");
        const formData = {
          name: name.value,
          phone: phone.value,
          email: email.value,
          photo: photo.value,
        };
        name.value = "";
        phone.value = "";
        email.value = "";
        photo.value = "";
    
        console.log(formData);
    
        addContact(formData);
      };
    return (
        <div><Card sx={{ minWidth: 275 }}>
        <CardContent>
         

            <TextField fullWidth id="name" label="Name*" variant="filled" /> <br/><br/>
            <TextField fullWidth id="phone" label="Phone*" variant="filled" /> <br/><br/>
            <TextField fullWidth id="email" label="Email*" variant="filled" /> <br/><br/>
            <TextField fullWidth id="photoUrl" label="URL*" variant="filled" /> <br/><br/>
        </CardContent>
        <CardActions>
          <Button style={{color: 'green'}}  size="small"  onClick={handleSubmit}>ADD NEW</Button>
        </CardActions>
      </Card></div>

    );
}

export default ContactForm;