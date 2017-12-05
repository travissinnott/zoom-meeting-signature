# zoom-meeting-signature
Node.js library for generating a Zoom meeting signature for use with Zoom API

# About

The [Zoom](https://zoom.us/) [Webclient](https://developer.zoom.us/docs/webclient/) / 
[Javascript API](https://zoom.github.io/zoom-sdk-web/Zoommtg.html) uses a token to authenticate
clients with the service.  It assumes that the javascript library will be used in a browser,
and the token is generated server-side.  This is the javascript version of the token
generator which can be used in your Node.js project.

If you are looking for a full web service for generating the token, see [zoom-meeting-generator-express].

# Usage

Install the module

```bash
npm install zoom-meeting-signature
```

Require the module and call

```javascript
const signature = require('zoom-meeting-signature');

const API_KEY = 'your api key';
const API_SECRET 'your api secret';

let sig = signature.generate(MEETING_ID, API_KEY, API_SECRET, signature.roles.PARTICIPANT)
```

# Resources

* [PHP example](https://gist.github.com/joshuawoodward/7574df3df9a089e2663582a2cf9f188b).
* https://zoom.github.io/zoom-sdk-web/tutorial-getting-started.html
* https://github.com/zoom/sample-app-web
