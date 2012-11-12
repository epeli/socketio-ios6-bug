# iOS 6 does not download any images while long polling connection is active in Socket.IO

Background:

  * http://www.devthought.com/2012/09/22/understanding-the-ios6-ajax-bugs/
  * http://www.realsoftwareblog.com/2012/09/ios-6-mobile-safari-web-applications.html
  * http://news.ycombinator.com/item?id=4552072
  * ShareJS is broken too https://github.com/josephg/ShareJS/issues/142


Reproducing:

    npm install
    node server.js

And open <http://localhost:3000/> with an iOS 6 device. You should see two
Opinsys Labs logos, but you don't.

The second image appears only after Socket.IO disconnects with a timeout:

    debug - clearing poll timeout
    debug - xhr-polling writing 8::
    debug - set close timeout for client BjjYC37KF5TZyoGyKUQq
    debug - xhr-polling closed due to exceeded duration
    Sending image /after96674/image.png to Mozilla/5.0 (iPad; CPU OS 6_0_1 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A523 Safari/8536.25
    debug - setting request GET /socket.io/1/xhr-polling/BjjYC37KF5TZyoGyKUQq?t=1352732952499
    debug - setting poll timeout
    debug - discarding transport
    debug - cleared close timeout for client BjjYC37KF5TZyoGyKUQq


Live demo http://epeli.socketio-ios6-bug.jit.su/

