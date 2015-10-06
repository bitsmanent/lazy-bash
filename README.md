Lazy - browser-based remote control interface
=============================================
Lazy is a shell based non-standard web server which only implements the bare
minimum to run commands on the local host through a web page. It aims to be
the remote control bridge between my Linux box and my smartphone. Since it
runs on a browser there's no need to install any app on the device.

Status
======
I'm still playing around with design, it's likely that some refactoring may
happen but the core should be more or less ready.

Requirements
============
In order to run lazy-bash you need the bash shell and a Unix userland.

Installation
============
To install lazy enter the following command (as root if needed):
```
# make install
```

Running
=======
```
$ cd <web-root>
$ lazy
```
The lazy command will tell you on which host:port is listening so just point
your browser there to get started.
Note: you must be root in order to run lazy-bash on port 80.

Alternatively, you can specify the webroot in the command line:

```
$ lazy "" "" <web-root>
```

The empty strings "" let lazy decide the address and port (respectively) to
listen on. You may want to make an alias for the above command in your shell in
order to only type "lazy".

Configuration
=============
The customization is done by editing the source code.
