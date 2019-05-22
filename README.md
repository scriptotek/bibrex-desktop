# Bibrex Desktop

[Electron](https://electronjs.org/)-wrapper for
[Bibrex](http://github.com/scriptotek/bibrex) that adds support for
controlling RFID devices.

This project is currently in an early demonstration stage.

`preload.js` adds an `rfidControl()` method on the `window` object that
Bibrex can use to enter checkin or checkout mode. Currently, it works by
calling the `RFIDIFControl.exe` program from Bibliotheca. A limitation of
`RFIDIFControl.exe` is that it does not provide any method for reading the
current state -- we can *change* the state, but we do not really know if
it succeeded, and there is no way to ask.

It would be cool if we could communicate directly with the RFID device
instead of using `RFIDIFControl`. While our RFID devices are bought from
Bibliotheca, it seems like the underlying electronics is from
[Feig](https://www.feig.de/), as they ship with a Feig OBID driver.

A project worth checking out is https://github.com/je4/Library-RFID-Tools,
which uses the FEIG SDK for JAVA, which might work with our devices.
The SDK can be downloaded from [feig.de](https://www.feig.de/), but
registration is needed.

The Library-RFID-Tools project provides code for working with ISO 15693 tags,
which is what we use. And for working with the "Finnish Data Model", which
is similar to the Norwegian (both are based on the 
["Danish model"](http://biblstandard.dk/rfid/dk/rfid_data_model_for_libraries_february_2009.pdf).

## Setup

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)). From your command line:

```bash
# Clone this repository
git clone https://github.com/scriptotek/bibrex-desktop.git
# Go into the repository
cd bibrex-desktop
# Install dependencies
npm install
# Run the app
npm start
```

## Other RFID projects

* [PyRFIDGeek](https://github.com/scriptotek/pyrfidgeek) is a python package
  for reading and writing ISO 15693 tags using  RFIDGeek boards based on the
  TI TRF7970A chip.

* [nfcbookscanner](https://github.com/scriptotek/nfcbookscanner) is a Java app
  for reading ISO 15693 tags on Android phones.
