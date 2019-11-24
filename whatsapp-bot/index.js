const bodyParser = require('body-parser');
const config = require('./config');
const express = require('express');
const Twilio = require('twilio');
const app = express()
const { twilioPhoneNumber, twilioAccountSid, twilioAuthToken } = config;

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

// function getTwilioClient() {
//     return twilioClient || new Twilio(twilioAccountSid, twilioAuthToken);
// }
  

app.get('/', (req,res)=>{
    res.send('working');
});

const port = process.env.PORT || 8000;
app.listen(port,()=>{
    console.log('listening at port 8000');
})