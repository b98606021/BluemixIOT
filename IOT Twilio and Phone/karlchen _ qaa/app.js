
/********************************************************************************
 *
 * Making a Voice call and sending a SMS using Twilio & Bluemix
 * Developed by:  Tinniam V Ganesh      Date :  16 Sep 2014
 * 
 *
 *******************************************************************************/
// Definitions
var app = require('gopher');
var twilio = require('twilio');


// Get the Account SID and Auth Token by parsing VCAP_SERVICES
var accountSid, authToken;
if (process.env.VCAP_SERVICES) {
	 var env = JSON.parse(process.env.VCAP_SERVICES);
	 var credentials = env['user-provided'][0]['credentials'];
     accountSid = credentials.accountSID;
     authToken = credentials.authToken;
}
 

// Create a Rest client
app.get('/', function(request, response) {
    var client = new twilio.RestClient(accountSid, authToken);
 
    /* Make a voice call to your mobile phone */
    // Use the Web page https://www.twilio.com/labs/twimlets/message to create a custom message
    // Setup the voice call to say "Twilio greetings from Bluemix 
    /* To make a voice call to your mobile phone uncomment the next 2 lines */
    //client.calls.create({  
    //url: "http://twimlets.com/message?Message%5B0%5D=Twilio%20greeting%20from%20Bluemix!&",
 
     /* Send a SMS to your mobile phone */
     //  to: Enter your mobile phone  for e.g.98765 43210
     // from: Enter the number Twilio alloted to your account
     // body: The message you would like to send
     client.messages.create({
         body:'Twilio notification through Bluemix!',
         to: '+886925065861',
         from: '5873168087',      
        }, function(err, message) {
             response.send('Message sent to ! ID:' +message.sid);
    });
});