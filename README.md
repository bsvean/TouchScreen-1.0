## TouchScreen

**TouchScreen** is designed to operate on Raspberry Pi 4 using the UCTRONICS 3.5 Inch Touch Screen attachment. It is designed to operate as a custom touchscreen interface for a number of different applications. 

TouchScreen focuses on a modular plugin system and uses [Electron](http://electron.atom.io/) as an application wrapper. So no more web server or browser installs necessary! It is derived from the MagicMirror² open-source software by MichMich.

## Installation

To install the TouchScreen Software, follow the steps below:

1. Install the Raspberry Pi OS onto the Raspberry Pi 4:
https://www.raspberrypi.org/downloads/raspberry-pi-os/

2. Download and install the driver for Raspbain OS resolution and touch screen support:
https://github.com/UCTRONICS/UCTRONICS_LCD35_HDMI_RPI

3. Download and install the latest Node.js version:
```sh
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
sudo apt install -y nodejs
```

4. Clone the repository and check out the master branch: 
```sh
git clone https://github.com/bsvean/TouchScreen-1.0
```

5. Enter the repository and install the application:
```sh
cd TouchScreen-1.0/
npm install
```

6. Start the application: 
```sh
npm run start
```
