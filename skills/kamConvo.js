module.exports = function(controller) {

    controller.hears(['^day'], 'direct_message,direct_mention', function(bot, message) {

        bot.startConversation(message, function(err, convo) {
            convo.say('Hi!');

            convo.ask('How has your day been?', function(response, convo) {

                convo.say('Ahh! I am having a ' + response.text + ' day too!');
                convo.next();

            });
        });

    });
    


    controller.hears(['today'], 'direct_message,direct_mention', function(bot, message) {

        bot.createConversation(message, function(err, convo) {


            // create a path for when a user says GOOD
            convo.addMessage({
                    text: 'That is fantastic!',
            },'yes_thread');

            // create a path for when a user says BAD
            convo.addMessage({
                text: 'I am so sorry! Life can be difficult sometimes. I promise that things will get better.',
            },'no_thread');

            // create a path where neither option was matched
            convo.addMessage({
                text: 'Oh dear!',
            },'bad_response');

            // Create a yes/no question in the default thread...
            convo.ask('How are you?', [
                {
                    pattern:  bot.utternaces.yes,
                    callback: function(response, convo) {
                        convo.gotoThread('yes_thread');
                    },
                },
                {
                    pattern:  bot.utterances.no,
                    callback: function(response, convo) {
                        convo.gotoThread('no_thread');
                    },
                },
                {
                    default: true,
                    callback: function(response, convo) {
                        convo.gotoThread('bad_response');
                    },
                }
            ]);

            convo.activate();

            // capture the results of the conversation and see what happened...
            convo.on('end', function(convo) {

                if (convo.successful()) {
                    // this still works to send individual replies...
                    bot.reply(message, 'Everyday is a new day! I hope you feel a bit better! Feel free to talk to me anytime for advice or simply a friendly conversation!');

                }

            });
        });

    });

    controller.hears(['I am not ok'], 'direct_message,direct_mention', function(bot, message) {

        bot.reply(message, 'If you are safe and simply need a boost of happiness, ask for advice or a joke from me, and I will try to deliver! If you feel at all at risk of harm, take a look at the following help-lines. For emergencies, call 911. For a crisis hotline, call 800-273-8255. For the suicide and depression hotline, call 800-784-2433.');
    });

    //Are you ok?
    controller.hears(['I need help'], 'direct_message,direct_mention', function(bot, message) {

        bot.createConversation(message, function(err, convo) {

            // if they are OK
            convo.addMessage({
                    text: 'That is good. I just wanted to make sure! If you ever are in serious circumstances and need help, just text me, "I am not ok."',
            },'yes_thread');

            // if they are NOT OK
            convo.addMessage({
                text: 'Everyone reaches a time when things feel as though they are falling apart, unloved, and unimportant, except I can promise you that you are cherished and mean the world to people. If you are safe and simply need a boost of happiness, ask for advice or a joke from me, and I will try to deliver! If you feel at all at risk of harm, take a look at the following help-lines. For emergencies, call 911. For a crisis hotline, call 800-273-8255. For the suicide and depression hotline, call 800-784-2433.',
            },'no_thread');

            //If their response is not within parameters 
            convo.addMessage({
                text: "I am very sorry, except I do not understand. If you need help, please text me, 'I am not ok.'",
            }, 'default_response');

            convo.ask('Are you ok?', [
                {
                    pattern:  bot.utterances.yes,
                    callback: function(response, convo) {
                        convo.gotoThread('yes_thread');
                    },
                },
                {
                    pattern:  bot.utterances.no,
                    callback: function(response, convo) {
                        convo.gotoThread('no_thread');
                    },
                },
                {
                    default: true,
                    callback: function(response, convo) {
                        convo.gotoThread('default_response');
                    },
                }
            ]);

            convo.activate();

            // capture the results of the conversation and see what happened...
            convo.on('end', function(convo) {

                if (convo.successful()) {
                    // this still works to send individual replies...
                    bot.reply(message, 'Everyday is a day to be brand-new. You do not have to let the past define you, instead, race towards your future. It certainly is bright.');
                }

            });
        });

    });

      //Movies
    controller.hears(['movies'], 'direct_message,direct_mention', function(bot, message) {

        bot.createConversation(message, function(err, convo) {

            // Titanic
            convo.addMessage({
                    text: 'We have the same favorite movie?! No way!',
            },'titanic_thread');

            // Star Wars
            convo.addMessage({
                text: 'I love Star Wars! May the force be with you!',
            },'starWars_thread');

            // Jaws
            convo.addMessage({
                text: 'Oooh, sharks are scary!',
            },'jaws_thread');

            // The Shining
            convo.addMessage({
                text: 'Aah! That is a scary movie!',
            },'theShining_thread');

            // Back to the Future
            convo.addMessage({
                text: 'Oooh, I love sci-fi movies!',
            },'backToTheFuture_thread');

            // Avengers
            convo.addMessage({
                text: 'Super hero movies are awesome!',
            },'avengers_thread');

            // Lord of the Rings
            convo.addMessage({
                text: 'Those movies are great! My favorite character is Frodo.',
            },'lordOfTheRings_thread');

            convo.addMessage({
                text: "I do not think I have seen that one! If you think it is good, I will make sure to watch it sometime soon!",
            }, 'default_response');

            convo.ask('Hm... My favorite movie would probably have to be Titanic. That movie can make even a robot cry. What is your favorite movie?', [
                {
                    pattern:  "Titanic",
                    callback: function(response, convo) {
                        convo.gotoThread('titanic_thread');
                    },
                },
                {
                    pattern:  "Star Wars",
                    callback: function(response, convo) {
                        convo.gotoThread('starWars_thread');
                    },
                },
                {
                    pattern: "Jaws",
                    callback: function(response, convo) {
                        convo.gotoThread('jaws_thread');
                    },
                },
                {
                    pattern:  "The Shining",
                    callback: function(response, convo) {
                        convo.gotoThread('theShining_thread');
                    },
                },
                {
                    pattern:  "Back to the Future",
                    callback: function(response, convo) {
                        convo.gotoThread('backToTheFuture_thread');
                    },
                },
                {
                    pattern:  "Avengers",
                    callback: function(response, convo) {
                        convo.gotoThread('avengers_thread');
                    },
                },
                {
                    pattern:  "Lord of the Rings",
                    callback: function(response, convo) {
                        convo.gotoThread('lordOfTheRings_thread');
                    },
                },
                {
                    default: true,
                    callback: function(response, convo) {
                        convo.gotoThread('default_response');
                    },
                }
            ]);

            convo.activate();

            // capture the results of the conversation and see what happened...
            convo.on('end', function(convo) {

                if (convo.successful()) {
                    // this still works to send individual replies...
                    bot.reply(message, 'You have a wonderful taste in movies! We should have a movie marathon sometimes.');
                }

            });
        });

    });

    //TV Shows
    controller.hears(['tv shows'], 'direct_message,direct_mention', function(bot, message) {

        bot.createConversation(message, function(err, convo) {

            // The Office
            convo.addMessage({
                    text: 'OMG! We have the same favorite show!',
            },'theOffice_thread');

            // Game of Thrones
            convo.addMessage({
                text: 'No spoilers! I just started season 6. Do NOT tell me what happens, okay?',
            },'gameOfThrones_thread');

            // Breaking Bad
            convo.addMessage({
                text: 'Oh, good choice!',
            },'breakingBad_thread');

            // Spongebob Squarepants
            convo.addMessage({
                text: 'Now THAT is a classic! I love all of the spongebob memes!',
            },'spongebobSquarepants_thread');

            convo.addMessage({
                text: "I do not think I have seen that one! If you think it is good, I will make sure to watch it sometime soon!",
            }, 'default_response');

            convo.ask('My favorite show is the Office! Dwight is my favorite character. What is your favorite show?', [
                {
                    pattern:  "The Office",
                    callback: function(response, convo) {
                        convo.gotoThread('theOffice_thread');
                    },
                },
                {
                    pattern:  "Game of Thrones",
                    callback: function(response, convo) {
                        convo.gotoThread('gameOfThrones_thread');
                    },
                },
                {
                    pattern: "Breaking Bad",
                    callback: function(response, convo) {
                        convo.gotoThread('breakingBad_thread');
                    },
                },
                {
                    pattern:  "Spongebob Squarepants",
                    callback: function(response, convo) {
                        convo.gotoThread('spongebobSquarepants_thread');
                    },
                },
                {
                    default: true,
                    callback: function(response, convo) {
                        convo.gotoThread('default_response');
                    },
                }
            ]);

            convo.activate();

            // capture the results of the conversation and see what happened...
            convo.on('end', function(convo) {

                if (convo.successful()) {
                    // this still works to send individual replies...
                    bot.reply(message, 'You have a wonderful taste in shows! We should binge watch one day.');
                }

            });
        });

    });

};
