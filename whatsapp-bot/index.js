const  express = require('express');
const  cors = require('cors');
const twilio = require('twilio');
const app = express();
const config = require('./config');
const {google} = require('googleapis');
app.use(express.json());

app.use(cors());

app.use(
  express.urlencoded({
    extended: false
  })
);
async function googleSearch(req, res, next){
  const client = new twilio(config.twilioAccountSid, config.twilioAuthToken);
  const customsearch = google.customsearch('v1');
  const { MessagingResponse } = twilio.twiml;
  const twiml = new MessagingResponse();
  const q = req.body.Body;
  const cx = config.searchEngineId;
  const googleApiKey =  config.customSearchApi
  const options = { cx, q, auth: googleApiKey };;

  try {
    const result = await customsearch.cse.list(options);
    const firstResult = result.data.items[0];
    const searchData = firstResult.snippet;
    const link = firstResult.link;

    twiml.message(`${searchData} ${link}`);

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
app.listen(8000, () => console.log(`listening on port 8000!`))