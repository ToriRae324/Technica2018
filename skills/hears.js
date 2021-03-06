var wordfilter = require('wordfilter');

module.exports = function(controller) {

    

    // Hears "greeting"
    controller.hears(["^hi", "^hello", "^hey", "^what's up?", "^yo", "^howdy"], 'direct_message,direct_mention', function(bot, message) {

            //This randomizes the selection of text. 

            var responses = [
                "Look who the cat dragged in...", "Well, hello there!", "Back at ya!", "Cheerio!", "Oh... it's you again.",
                "Hello! you look fabulous today!", "Good day!", "Hi! What's up?", "Hello, it's great to see you!", "Howdy, partner!", "Ah! Oh, you scared me!", "Yay! You're here! You just made my day!" , "Why, hello there!", "Yo!"
              ];
          
              var response = responses[Math.floor(Math.random()*responses.length)];

              var convoStarters = [
                  "What do you want to talk about today?", "Anything on your mind that you want to discuss?", "What's up that you want to discuss?", "What should we chat about now?", "What's up?"
                ]

                var convoStarter = convoStarters[Math.floor(Math.random()*convoStarters.length)];

              bot.reply(message, response); 
              bot.reply(message, convoStarter);   
        
    });

    // Hears "byes"
    controller.hears(["^bye", "^later", "^goodbye", "^see ya"], 'direct_message,direct_mention', function(bot, message) {

        var responses = [
            "Bye! ", "Until next time", "I hope they come back soon.", "Bon voyage!", "Aw, you've got to go already?! Bye. :(", "Good-bye! See you soon!", "Talk to you later!", "See you later!", "It was great talking to you!", "This has been a lovely conversation. Bye-bye!"
          ];
      
          var response = responses[Math.floor(Math.random()*responses.length)];
      
          bot.reply(message, response);      
        
    });


    // // profanity filter
    // controller.hears(['(.*)'], 'direct_message,direct_mention', function(bot, message) {

    //     var responses = [
    //         "Whoa! Watch your profanity!", "Hey, don't be saying that!","Go wash your mouth!", "Shame!"
    //       ];
      
    //       var response = responses[Math.floor(Math.random()*responses.length)];


    //     if (message.match[0]) {

    //         if (wordfilter.blacklisted(message.match[0])) {
    //             bot.reply(message, response);
    //         }
    //     }
            
        
    // });

    // Hears jokes
    controller.hears(["^joke", "^tell me a joke"], 'direct_message,direct_mention', function(bot, message) {

        var responses = [
            "Did you hear about the restaurant on the moon? Great food, no atmosphere!", "Why did the coffee file a police report? Because it got mugged.", "Why did the scarecrow win an award? Because he was outstanding in his field!","Want to hear a joke about construction? Actually, I'm still working on it.", "I wouldn't buy anything with velcro. It's a total rip-off.","Why couldn't the bicycle stand up by itself? It was two tired.", "According to all known laws of aviation, there is no way that a bee should be able to fly. Its wings are too small to get its fat little body off the ground. The bee, of course, flies anyways. Because bees don't care what humans think is impossible.","Road work ahead? Uh yeah, I sure hope it does!"
          ];
      
          var response = responses[Math.floor(Math.random()*responses.length)];
      
          bot.reply(message, response);      
        
    });

    // Hears love
    controller.hears(["^i love (.*)"], 'direct_message,direct_mention', function(bot, message) {

        var responses = [
            "That makes two of us!", "Orly?", "Sure ya do...", "Me too.", "No way?!?", "How about that!"
          ];
      
          var response = responses[Math.floor(Math.random()*responses.length)];
      
          bot.reply(message, response);      
        
    });

    
  

    // Hears love
    controller.hears(["^i hate (.*)"], 'direct_message,direct_mention', function(bot, message) {

        var responses = [
            "Thats a bit harsh.", "Woah there!", "Hate is a strong word.", "That's an interesting opinion.", "Don't be rude :(", "Spread love not hate.", "Hey! Don't be like that."
          ];
      
          var response = responses[Math.floor(Math.random()*responses.length)];
      
          bot.reply(message, response);      
        
    });
    
    // Hears love
    controller.hears(["^coin flip", "^flip a coin"], 'direct_message,direct_mention', function(bot, message) {

        var flip = Math.floor(Math.random()*2);
        var response = ""
          if(flip === 0){
              response = "HEADS!";
          } else {
              response = "TAILS!";
          };
      
          bot.reply(message, response);      
        
    });
    

};
