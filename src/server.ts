import { getFullLink } from "./";
import express from 'express';

const app = express();
const PORT = 3000;
const HOSTNAME = "::";

app.get('/:url(*)', async (req, res) => {
  const encodedUrl = req.params.url;
  const decodedUrl = decodeURIComponent(encodedUrl);

  const fullLink = await getFullLink(decodedUrl);

  if (fullLink) {
    res.redirect(307, fullLink); 
  } else {
    res.status(502).send('Failed to get the download link.');
  }
});

app.listen(PORT, HOSTNAME, () => {
  console.log(`Server is running on port ${PORT}`);
})

