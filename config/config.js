/* TouchScreen Config Sample
 *
 * By Brian Svean
 * MIT Licensed.
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
		{
  				module: "MMM-SmartTouch",
  				position: "bottom_center",
  				config: {}	
 		},
		]
};
/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
