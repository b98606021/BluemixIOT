/*******************************************************************************
 * Copyright (c) 2014 IBM Corp.
 *
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * and Eclipse Distribution License v1.0 which accompany this distribution.
 *
 * The Eclipse Public License is available at
 *   http://www.eclipse.org/legal/epl-v10.html
 * and the Eclipse Distribution License is available at
 *   http://www.eclipse.org/org/documents/edl-v10.php.
 *
 * Contributors:
 *   Bryan Boyd - Initial implementation 
 *******************************************************************************/

var config = {
	iot_deviceType: "vehicle",     // replace with your deviceType
	iot_deviceOrg: "ob4rz6",       // replace with your IoT Foundation organization
	iot_deviceSet: [               // replace with your registered device(s)
		{ deviceId: "ABC", token: "z6GmOPOoS1?o!8iArM" },   
		{ deviceId: "123", token: "@VcjE5fXBCop)D6xCL" },
		{ deviceId: "321", token: "*skLTLWuYw5IN0LRU)" }
	],
	iot_apiKey: "a-ob4rz6-gfbg8rnafu",    // replace with the key for a generated API token
	iot_apiToken: "mGn!9vjr3YIASBdaXo",  // replace with the generated API token

	// these topics will be used by Geospatial Analytics
	notifyTopic: "iot-2/type/api/id/geospatial/cmd/geoAlert/fmt/json",
	inputTopic: "iot-2/type/vehicle/id/+/evt/telemetry/fmt/json",
};

try {
	module.exports = config;
} catch (e) { window.config = config; }
