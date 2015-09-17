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
An installation script will be available. For now:

```
$ sudo cp lazy /usr/local/bin
```

Running
=======
```
$ lazy
```

Configuration
=============
The customization is done by editing the source code, then (re)istall lazy.
