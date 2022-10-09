import axios from "axios";

export default  async function  saveEmail (emailObject)  {
    const email = emailObject;
    const key = `${process.env.REACT_APP_KEY}`
    const headers = { 
      'Content-Type': 'application/json' ,
      "X-Master-Key": key
    };
    
    await axios.put('https://api.jsonbin.io/v3/b/634271202b3499323bd84b2f', email, { headers })
        .then(response => console.log(`Email: ${emailObject.email} saved`))
        .catch(error => {
          console.log(error)})
  }