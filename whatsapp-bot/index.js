const  express = require('express');
const path = require('path');
const  cors = require('cors');
const twilio = require('twilio');
const app = express();
const config = require('./config');
const {google} = require('googleapis');
const port = process.env.PORT || 8000;
app.use(express.json());

app.use(cors());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

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
app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!' })
})
app.post('/', googleSearch);
app.listen(port, () => console.log(`listening on port ${port}`))