module.exports = function(controller) {


    // [WEATHER]
    // (user asks for the weather)
    // -"It's always sunny where I am! How's the weather in your neck of the woods?"
    // (user responds "sunny")
    //     -"Nice! That's great weather for going otuside!"
    // (user responds "cloudy")
    //     -"Uh oh, I hope it doesn't rain."
    // (user responds "rainy")
    //     -"Hopefully the sun comes out soon!"
    // (user responds "snowy/snowing")
    //     -"Really?! You should go outside and make a snowman!"
    //     -"Whoa! That's pretty COOL. Haha, get it?!"
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

};
