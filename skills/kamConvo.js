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
            },'positive_thread');

            // create a path for when a user says BAD
            convo.addMessage({
                text: 'I am so sorry! Life can be difficult sometimes. I promise that things will get better.',
            },'negative_thread');

            // create a path where neither option was matched
            convo.addMessage({
                text: 'Oh dear!',
            },'bad_response');

            // Create a yes/no question in the default thread...
            convo.ask('How are you?', [
                {
                    pattern:  bot.utternaces.positive,
                    callback: function(response, convo) {
                        convo.gotoThread('positive_thread');
                    },
                },
                {
                    pattern:  bot.utterances.negative,
                    callback: function(response, convo) {
                        convo.gotoThread('negative_thread');
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

    //Movies
    controller.hears(['What is your favorite movie?'], 'direct_message,direct_mention', function(bot, message) {

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

      //Movies
    controller.hears(['What is your favorite movie?'], 'direct_message,direct_mention', function(bot, message) {

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
    controller.hears(['What is your favorite TV show?'], 'direct_message,direct_mention', function(bot, message) {

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

            convo.ask('My favorite show is the Office! Dwight is my favorite character.', [
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
                    bot.reply(message, 'You have a wonderful taste in movies! We should have a movie marathon sometimes.');
                }

            });
        });

    });

};
