const express = require('express');
const router = express.Router();
const Pusher = require('pusher');

router.get('/', (req, res) => {
  res.send('all good');
});

router.post('/pusher/auth', (req, res) => {
    console.log('POST to /pusher/auth');
  });

  const pusher = new Pusher({
    appId: 'xxxxxx',
    key: 'xxxxxxxxxxxxxxxxxxxx',
    secret: 'xxxxxxxxxxxxxxxxx',
  });

  router.post('/pusher/auth', (req, res) => {
    const socketId = req.body.socket_id;
    const channel = req.body.channel_name;
    const auth = pusher.authenticate(socketId, channel);
    res.send(auth);
  });
module.exports = router;