/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
 var pp=0;
          var notificationOpenedCallback = function(jsonData) {
   var ref = cordova.InAppBrowser.open(jsonData.additionalData.ssylka, '_blank', 'location=no');
   pp=1;          
  };

  window.plugins.OneSignal.init("338ecc0f-8620-437d-9ed3-9cd12d5976d9",
                                 {googleProjectNumber: "565071945004"},
                                 notificationOpenedCallback);
        
window.plugins.OneSignal.getIds(function(ids) {
    if(pp=='1'){}
    else{
   var ref = cordova.InAppBrowser.open('http://topstar.vezuedu.kz/fr7/index.php?userpush='+ids.userId, '_blank', 'location=no');}
});
  
  // Show an alert box if a notification comes in when the user is in your app.
  window.plugins.OneSignal.enableInAppAlertNotification(true);
    }

};
