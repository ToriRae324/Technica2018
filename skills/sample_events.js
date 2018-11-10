module.exports = function(controller) {


  controller.on('bot_space_join', function(bot, message) {

    var responses = [
      "Niki in da house!", "THE bot has arrived!", "You miss me?"
    ]

    var response = Math.floor(Math.random(responses.length));


    bot.reply(message, response);

  });

  controller.on('user_space_join', function(bot, message) {

    var responses = [
      "Look who the cat dragged in...", "Well, hello there ", "Welcome "
    ]

    var response = Math.floor(Math.random(responses.length));

    bot.reply(message, response + message.raw_message.data.personDisplayName);

  });


};
