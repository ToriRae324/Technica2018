module.exports = function(controller) {

    // weather
    controller.hears(['weather'], 'direct_message,direct_mention', function(bot, message) {

        bot.createConversation(message, function(err, convo) {

            // sunny
            convo.addMessage({
                    text: "Nice! That's great weather for going outside!",
            },'sunny_thread');

            // cloudy
            convo.addMessage({
                text: "Uh oh, I hope it doesn't rain.",
            },'cloudy_thread');

            // rainy
            convo.addMessage({
                text: "Hopefully the sun comes out soon!",
            },'rainy_thread');


            // create a path where neither option was matched
            // this message has an action field, which directs botkit to go back to the `default` thread after sending this message.
            convo.addMessage({
                text: "*shrug* Could be better. Could be worse.",
            },'other_response');

            // Create a yes/no question in the default thread...
            convo.ask('It\'s always sunny where I am! How\'s the weather in your neck of the woods?', [
                {
                    pattern:  "sunny",
                    callback: function(response, convo) {
                        convo.gotoThread('sunny_thread');
                    },
                },
                {
                    pattern:  "cloudy",
                    callback: function(response, convo) {
                        convo.gotoThread('cloudy_thread');
                    },
                },
                {
                    pattern:  "rainy",
                    callback: function(response, convo) {
                        convo.gotoThread('rainy_thread');
                    },
                },
                {
                    default: true,
                    callback: function(response, convo) {
                        convo.gotoThread('other_response');
                    },
                }
            ]);

            convo.activate();

            // capture the results of the conversation and see what happened...
            convo.on('end', function(convo) {

                if (convo.successful()) {
                    // this still works to send individual replies...
                    bot.reply(message, 'Make the most of it!');

                }

            });
        });

    });

    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


    // food
    controller.hears(['food'], 'direct_message,direct_mention', function(bot, message) {

        bot.createConversation(message, function(err, convo) {

            // burgers
            convo.addMessage({
                    text: "Ooh, you may not want to eat too much McDonald's though!",
            },'burgers_thread');

            // sushi
            convo.addMessage({
                text: "Mmm, I love Japanese food... At least I think I would!",
            },'sushi_thread');

            // pizza
            convo.addMessage({
                text: "A classic with all the food groups! Good answer!",
            },'pizza_thread');

            // ice cream
            convo.addMessage({
                text: "Oooh, with lots of sprinkles!",
            },'icecream_thread');

            // pasta
            convo.addMessage({
                text: "Mama Mia!",
            },'pasta_thread');

            // create a path where neither option was matched
            // this message has an action field, which directs botkit to go back to the `default` thread after sending this message.
            convo.addMessage({
                text: "Yum! Sounds good!",
            },'other_response');

            // default ask
            convo.ask("I'm a robot. So I don't really eat... but... what's your favorite food?", [
                {
                    pattern:  "burgers",
                    callback: function(response, convo) {
                        convo.gotoThread('burgers_thread');
                    },
                },
                {
                    pattern:  "sushi",
                    callback: function(response, convo) {
                        convo.gotoThread('sushi_thread');
                    },
                },
                {
                    pattern:  "pizza",
                    callback: function(response, convo) {
                        convo.gotoThread('pizza_thread');
                    },
                },
                {
                    pattern:  "ice cream",
                    callback: function(response, convo) {
                        convo.gotoThread('icecream_thread');
                    },
                },
                {
                    pattern:  "pasta",
                    callback: function(response, convo) {
                        convo.gotoThread('pasta_thread');
                    },
                },
                {
                    default: true,
                    callback: function(response, convo) {
                        convo.gotoThread('other_response');
                    },
                }
            ]);

            convo.activate();

            // capture the results of the conversation and see what happened...
            convo.on('end', function(convo) {

                if (convo.successful()) {
                    // this still works to send individual replies...
                    bot.reply(message, '... Now, I *feel* hungry...');

                }

            });
        });

    });


    // 8ball
    controller.hears(["8ball"], 'direct_message,direct_mention', function(bot, message) {

        bot.startConversation(message, function(err, convo) {
            var responses = [
                "It is certain.", "It is decidedly so.", "Without a doubt.", "Yes - definitely.","You may rely on it.", "As I see it, yes.", "Most likely.", "Outlook good.", "Yes.", "Signs point to yes.", "Reply hazy, try again.", "Ask again later.", "Better not tell you now.", "Cannot predict now.", "Concentrate and ask again.", "Don't count on it.", "My reply is no.", "My sources say no.", "Outlook not so good.", "Very doubtful."
              ];
          
              var answer= responses[Math.floor(Math.random()*responses.length)];

            convo.say('You wish to ask the Magic 8 ball a question!');

            convo.ask('What do you wish to ask?', function(response, convo) {

                convo.say(answer);
                convo.next();

            });
        });

    });

};
