// index.js

// SkillService

// TODO jm-rives where do you paste this Lambda AWS vs Amazon ASK
'use strict';

// invoke with hello e.g "Alexa, ask hello to say something"

//  APP_ID came from https://developer.amazon.com/edw/home.html#/skill/amzn1.ask.skill.39466ef7-93a5-4b3e-9ab4-f9b55bbfb7bb/en_US/info

var APP_ID = 'amzn1.ask.skill.dcaf3853-fc29-4618-954e-cce99bf96eb3';
var AlexaSkill = require('./AlexaSkill');
var SPEECH_OUTPUT = "Butz!...Butz! Butz! Butz!";
var AlexaIsSix = function() {
  AlexaSkill.call(this, APP_ID);
};


AlexaIsSix.prototype = Object.create(AlexaSkill.prototype);

// how skill service handles requests from skill interface

var helloResponseFunction = function(intent, session, response) {
  response.tell(SPEECH_OUTPUT);
};
// onLaunch event handler
AlexaIsSix.prototype.eventHandlers.onLaunch = helloResponseFunction;

// intent handler
AlexaIsSix.prototype.intentHandlers = {
  'AlexaIsSixIntent' : helloResponseFunction
};
// AWS Lambda handler
exports.handler = function(event, context) {
  var alexaIsSix = new AlexaIsSix();
  alexaIsSix.execute(event, context);
};








