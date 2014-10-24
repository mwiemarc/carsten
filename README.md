carsten
==========

Carsten allows you to *carst* stuff. 
Ok, more in detail: The idea is to cast URLs within your network to a receiver. A receiver can be anything. A TV, a projector, a Tablet. 

How we use Carsten currently:

 * Play a YouTube video
 * Start a Google Hangout on a TV
 * Monitor your CI build status
 * ...

The philosophy of carst
--------------------------------------------
Carsten is...
 1. Not a way to stream content from one device to another
 2. Not meant for interaction with the carsted stuff. You just show stuff and that is what you want. If you want to interact, hook it up with your HDMI/DVI/... cable and waste a lot of time instead of showing your message.
 3. Awesome. Don't question it.
 
How it works
------------

 1. A receiver registers itself with a REST hook at the carsten broadcast
 2. On carsten itself, you can select the receiver and cast an URL to it.
 
That's it.
