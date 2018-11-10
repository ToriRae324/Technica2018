module.exports = function(controller) {

    controller.hears(['^day'], 'direct_message,direct_mention', function(bot, message) {

        bot.startConversation(message, function(err, convo) {
            convo.say('Hi!');

            convo.ask('How has your day been?', function(response, convo) {

                convo.say('Ahh! I am having' + response.text + 'day too!');
                convo.next();

            });
        });

    });


    controller.hears(['^question'], 'direct_message,direct_mention', function(bot, message) {

        bot.createConversation(message, function(err, convo) {

            // create a path for when a user says GOOD
            convo.addMessage({
                    text: 'That is fantastic!',
                    action: 'stop', // this marks the converation as over

            },'positive_thread');

            // create a path for when a user says BAD
            // mark the conversation as unsuccessful at the end
            convo.addMessage({
                text: 'I am so sorry! Life can be difficult sometimes. I promise that things will get better.',
            },'negative_thread');

            // create a path where neither option was matched
            // this message has an action field, which directs botkit to go back to the `default` thread after sending this message.
            convo.addMessage({
                text: 'Oh dear!',
                action: 'default',
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

                    // and now deliver cheese via tcp/ip...
                }

            });
        });

    });

};
