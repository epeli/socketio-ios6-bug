
# iOS 6 does not download any images while long polling connection is active in Socket.IO

Background:

  * http://www.devthought.com/2012/09/22/understanding-the-ios6-ajax-bugs/
  * http://www.realsoftwareblog.com/2012/09/ios-6-mobile-safari-web-applications.html
  * http://news.ycombinator.com/item?id=4552072


Reproducing:

    npm install
    node server.js

And open <http://localhost:3000/> with an iOS 6 device. You should see two
Opinsys Labs logos, but you don't.

Live demo http://epeli.socketio-ios6-bug.jit.su/

