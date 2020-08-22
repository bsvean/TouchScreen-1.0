/* TouchScreen Config Sample
 *
 * By Brian Svean
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 *
 */

var config = {
	
	address: "localhost", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out or empty, is "localhost"
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	timeFormat: 12,
	units: "metric",
	// serverOnly:  true/false/"local" ,
			     // local for armv6l processors, default
			     //   starts serveronly and then starts chrome browser
			     // false, default for all  NON-armv6l devices
			     // true, force serveronly mode, because you want to.. no UI on this device

	modules: [
		{
			module: "alert",
		},
		/*{
			module: "updatenotification",
			position: "top_bar"
		},*/
		{
			module: "clock",
			position: "top_bar",
			config: {}
		},
		/*{
			module: "calendar",
			header: "US Holidays",
			position: "top_bar",
			config: {
				calendars: [
					{
						symbol: "calendar-check",
						url: "webcal://www.calendarlabs.com/ical-calendar/ics/76/US_Holidays.ics"					}
				]
			}
		},
		{
			module: "compliments",
			position: "top_bar"
		},
		{
			module: "currentweather",
			position: "top_right",
			config: {
				location: "New York",
				locationID: "", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "YOUR_OPENWEATHER_API_KEY"
			}
		},*/
		{
			module: "MMM-weatherforecast",
			position: "top_bar",
			header: "Weather Forecast",
			config: {
				location: "Chicago,US",
				locationID: "4887398",
				appid: "fc2f7603b35f20914940b7ee70ee406f",
				units: "imperial"
				}
		},
		/*{
			module: "newsfeed",
			position: "top_bar",
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},
		{
    			module: "MMM-Bring",
    			position: "top_bar",
    			config: {
       			email: "USER@EXAMPLE.COM",
       			password: "SECRET",
       			updateInterval: 15, // in Minutes
       			listName: "Zuhause", // optional
       			showListName: true,
       			activeItemColor: "#EE524F",
       			latestItemColor: "#4FABA2",
       			showLatestItems: false,
       			maxItems: 0,
       			maxLatestItems: 0,
       			locale: "de-DE",
       			useKeyboard: false
    			}
		},
		{
    			module: "MMM-Keyboard",
    			position: "top_bar",
			config: {
				startWithNumbers: false,
				startUppercase: true,
				debug: false,
				}
		},*/
		{
  				module: "MMM-SmartTouch",
  				position: "bottom_center",
  				config: {}	
 		},
		]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
