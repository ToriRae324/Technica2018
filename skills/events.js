module.exports = function(controller) {


  controller.on('bot_space_join', function(bot, message) {

    var responses = [
      "Niki in da house!", "THE bot has arrived!", "Did you ou miss me?", "Helloooo? Is anyone there??", "Knock knock! Who's there? It's me!", "No need to worry. I'm here now!", "I know you were lonely without me. ;)"
    ];

    var response = responses[Math.floor(Math.random()*responses.length)];

    bot.reply(message, response);

  });

  controller.on('bot_space_leave', function(bot, message) {

    var responses = [
      "I'll just be on my way then...", "I must go. My people need me.", "Well this has been lovely. Until next time!", "gtg, ttyl!", "Niki Out!", "Dueces!"
    ];

    var response = responses[Math.floor(Math.random()*responses.length)];

    bot.reply(message, response);

  });

  controller.on('user_space_join', function(bot, message) {

    var responses = [
      "Look who the cat dragged in... ", "Well, hello there ", "Cheerio ", "Oh... it's you again ",
      "Hello! you look fabulous today ", "Good day ", "Hi! What's up ", "Hello, it's great to see you ", "Howdy, ", "Ah! Oh, you scared me ", "Yay! You're here! You just made my day " , "Why, hello there!", "Yo "
    ];

    var response = responses[Math.floor(Math.random()*responses.length)];

    bot.reply(message, response + message.raw_message.data.personDisplayName+ "!");

  });

  controller.on('user_space_leave', function(bot, message) {

    var responses = [
      "Bye ", "Until next time ", "I hope you come back soon ", "Bon voyage ", "Aw, you've got to go already?! Bye :( ", "Good-bye! See you soon ", "Talk to you later ", "See you later ", "It was great talking to you ", "This has been a lovely conversation. Bye-bye "
    ]

    var response = responses[Math.floor(Math.random()*responses.length)];

    bot.reply(message, response + message.raw_message.data.personDisplayName + "!");

  });


};
