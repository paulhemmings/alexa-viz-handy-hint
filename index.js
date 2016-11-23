'use strict';
var Alexa = require('alexa-sdk');

var APP_ID = 'amzn1.ask.skill.0cf9c864-0680-4067-8ad4-b706caf78d8c'; //OPTIONAL: replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";
var SKILL_NAME = 'Viz Handy Hints';

/**
 * Array containing space facts.
 */
var FACTS = [
    "MOTORISTS! When going through a speed camera, flash your lights twice quickly and watch the driver in front hit his brakes when he thinks he's been caught.",
    "GAMBLERS! For a new gambling opportunity, try sending £50 to yourself by Royal Mail.",
    "EMPLOYERS! Avoid hiring unlucky people by immediately tossing half the CVs into the bin.",
    "MEN: When listening to your favourite CD, simply turn up the sound to the volume you desire - then turn it down three notches. This saves your wife having to do it.",
    "DRIVERS! Avoid getting prosecuted for using your phone while driving. Simply pop your mobile inside a large shell and the police will think you are listening to the sea.",
    "BANGING two pistachio nut shells together gives the' impression a very small horse' is approaching.",
    "DON'T waste money on expensive iPods. Simply think of your favourite tune and I hum it. If you want to switch tracks, simply think of another song you like and hum that instead.",
    "CINEMAGOERS! Have consideration for pirate DVD viewers by using the toilet before the film starts.",
    "DRIVERS! If a car breaks down or stalls in front of you, beep your horn and wave your arms frantically. This should help the car start and send them on their way.",
    "PREVENT burglars stealing everything in the house by moving everything into your bedroom when you go to bed. In the morning, move it all back again.",
    "CAR THIEVES! Don't be discouraged if nothing is on view. The valuables may be hidden in the glove box or under a seat.",
    "RAPPERS! Avoid having to say! Know what I'm sayin all the time by actually speaking clearly in the first place.",
    "SHOES last twice as long if only worn every other day.",
    "SINGLE MEN! Convince people you have a girlfriend by standing outside Topshop with bags of shopping, looking at your watch and occasionally glancing inside.",
    "EMPLOYEES! Only use the loo at work. Not only will you save money on toilet paper, but you'll also be getting paid.",
    "SCROOGES! Save money at Christmas by returning last year's cards to the sender with the simple inscription Same to you.",
    "MICRA DRIVERS! Attach a lighted sparkler to the roof of your car before starting a long journey. You drive the thing like a sodding dodgem car anyway.",
    "ANGLERS! Attach a helium balloon to your line and bait the hook with an acorn. Then sit under a tree and fish for squirrels. An upturned laundry basket would make an ideal keep-net, but don't forget to throw the squirrels back into the tree at the end of the day.",
    "SINGLE MEN! Get a glimpse of married life by taping Woman's Hour on Radio 4, then playing it back at a higher volume than the TV while trying to watch something on Discovery Wings.",
    "BOIL an egg to perfection without costly egg timers by popping it into boiling water and driving away from your home at exactly 60mph. After three miles, phone your wife to take the egg out the pan.",
    "SHOPPERS! Take one grape to the till. It won't register on the low-tech, insensitive scales so you will get it for free. Repeat this procedure 100 times or so and you have yourself a free bunch of grapes.",
    "McDONALD'S! Make your brown carrier bags green so they blend in with the countryside after they've been thrown out of car windows.",
    "A POST-IT Note stuck beneath the nose is an ideal way to foil lip-readers.",
    "TOWN COUNCILS! Reduce litter problems by issuing blind folk with pointy sticks.",
    "WHEN visiting a motorway service station for a cup of tea and a slice of cake, make sure you arrange your bank loan or second mortgage before you get to the tills, saving time and embarrassment.",
    "CYCLISTS! Avoid getting a sore behind by simply placing a naan bread over your saddle. This will comfort your ride and when you return home, hey presto! A warm snack.",
    "HOUSEWIVES! Before attempting to remove stubborn stains from a garment, circle the soiled area with a permanent pen so that when you remove it from the washing machine you can check the stain has gone.",
    "YOUNG mothers! Calm hysterically crying children in the supermarket by firmly slapping their legs and then tugging them along by the wrist.",
    "FOOTBALLERS! Remember there is plenty of time to get drunk after your playing career has ended.",
    "HORSE whisperers! Speak louder. The animals will hear you more clearly, thus speeding up training times.",
    "FEMALE shop assistants! When a garage mechanic comes to your till, add on a selection of random items they didn't know they needed and charge them s50 labour costs for the transaction.",
    "WORRIED that your teeth will be stained after a heavy night drinking red I wine? Drink a bottle of white wine before going to bed, to remove the stains."
];

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetFact');
    },
    'GetNewFactIntent': function () {
        this.emit('GetFact');
    },
    'GetFact': function () {
        // Get a random space fact from the space facts list
        var factIndex = Math.floor(Math.random() * FACTS.length);
        var randomFact = FACTS[factIndex];

        // Create speech output
        var speechOutput = "Here's your fact: " + randomFact;

        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = "You can say tell me a handy hint, or, you can say exit... What can I help you with?";
        var reprompt = "What can I help you with?";
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', 'Goodbye!');
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', 'Goodbye!');
    }
};
