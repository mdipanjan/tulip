const  express = require('express');
const  cors = require('cors');
const twilio = require('twilio');
const app = express();
const config = require('./config');
app.use(express.json());

app.use(cors());

app.use(
  express.urlencoded({
    extended: false
  })
);
async function googleSearch(req, res){
  const client = new twilio(config.twilioAccountSid, config.twilioAuthToken);
  const { MessagingResponse } = twilio.twiml;
  const twiml = new MessagingResponse();
  const q = req.body.Body;
  try {
    twiml.message(`helloworld`);

    res.set('Content-Type', 'text/xml');

    return res.status(200).send(twiml.toString());

  } catch (error) {
    return next(error);
  }
}
app.get('/', (req,res)=>{
  console.log(config.twilioAccountSid)
  res.send('ok')
})
app.post('/', googleSearch);
app.listen(8000, () => console.log(`Magic...Magic On => 8000!`))