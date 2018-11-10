var wordfilter = require('wordfilter');

module.exports = function(controller) {

    controller.hears(['^say (.*)','^say'], 'direct_message,direct_mention', function(bot, message) {
        if (message.match[1]) {

            if (!wordfilter.blacklisted(message.match[1])) {
                bot.reply(message, message.match[1]);
            } else {
                bot.reply(message, '_sigh_');
            }
        } else {
            bot.reply(message, 'I will repeat whatever you say.')
        }
    });

    // Hears "greeting"
    controller.hears(["^hi", "^hello", "^hey", "^what's up?", "^yo", "^howdy"], 'direct_message,direct_mention', function(bot, message) {

        var responses = [
            "Look who the cat dragged in...", "Well, hello there!", "Back at ya!", "Cheerio!", "Oh... it's you again.",
            "Hello! you look fabulous today!", "Good day!", "Hi! What's up?", "Hello, it's great to see you!", "Howdy, partner!", "Ah! Oh, you scared me!", "Yay! You're here! You just made my day!" , "Why, hello there!", "Yo!"
          ];
      
          var response = responses[Math.floor(Math.random()*responses.length)];
      
          bot.reply(message, response);      
        
    });

    // Hears "byes"
    controller.hears(["^bye", "^later", "^goodbye", "^see ya"], 'direct_message,direct_mention', function(bot, message) {

        var responses = [
            "Bye! ", "Until next time", "I hope they come back soon.", "Bon voyage!", "Aw, you've got to go already?! Bye. :(", "Good-bye! See you soon!", "Talk to you later!", "See you later!", "It was great talking to you!", "This has been a lovely conversation. Bye-bye!"
          ];
      
          var response = responses[Math.floor(Math.random()*responses.length)];
      
          bot.reply(message, response);      
        
    });


    // profanity filter
    controller.hears(['(.*)'], 'direct_message,direct_mention', function(bot, message) {

        var responses = [
            "Whoa! Watch your profanity!", "Hey, don't be saying that!","Go wash your mouth!", "Shame!"
          ];
      
          var response = responses[Math.floor(Math.random()*responses.length)];


        if (message.match[0]) {

            if (wordfilter.blacklisted(message.match[0])) {
                bot.reply(message, response);
            }
        }
            
        
    });

    /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
    /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
    /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
    /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
    /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
    /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
    

};
