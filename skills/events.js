module.exports = function(controller) {


  controller.on('bot_space_join', function(bot, message) {
    
      var introductions = [
          "I am Niki! It is nice to meet you! I am a Webex Chat Bot and your new professional best friend! Haha! I am here for whenever you are feeling lonely, down, or simply want to have a conversation. If you ask, I can give you work, people, general, and life advice! I also can answer all of your spooky questions if you text me my secret codeword - '8ball.' If you need help, just let me know, and I will try my hardest to assist you. If you would like a laugh or a smile, ask me to tell a joke! You can also text me about different topics for us to discuss, such as movies, tv shows, and the weather. Sometimes all someone needs is to have a little chat, and I am here to do just that! Hey, let's do a little icebreaker! Ask me to tell a joke! I promise it'll be a good one!", 
          "Woah! I was not expecting you to say hello so soon! My name is Niki, and I am your new and improved BFF! Bot Friend Forever! Just kidding, I am your own friendly conversation buddy for whenever you need to vent, ask for help, or hear a joke! If you ask, I can give you advice on different topics, like people, work, and life. I also can answer your spooky questions about life if you guess my secret codeword - '8ball'. Oh nOoOOOO! It is DEFINITELY not 8ball, no way! Hehehehe! I also can tell pretty hilarious jokes if you would like one! I am here to help you, and if you need help, please ask for it! If you would simply like to have a nonchalant conversation, mention a subject and we can talk! For example, we can chat about our favorite movies, favorite tv shows, and the weather. You know what, we should get to know each other a bit! Ask me to tell a joke or mention the word movies!",
          "BEST FRIENDDDDDD! I am so happy that you reached out to me! I'm Niki, a friendly chat bot from Webex! I am here to be a helping hand for whatever you need, whether that is advice about life, people, or work, or simply a nice conversation to relieve the stresses of life! You can ask me to tell a joke, and if you mention a subject, such as movies, tv shows, or weather, we can talk about it! I am so excited to get to know you! I'm so excited, in fact, that I will already share one of my biggest secrets. If you text me my codeword, '8ball' I can answer life's most difficult questions hehehehe! Finally, on a more serious note, if you ever are in a dangerous state-of-mind or condition, ask me for help and I can offer assistance. What should we talk about today?"
      ];
      var introduction = introductions[Math.floor(Math.random()*introductions.length)];

    var responses = [
      "Niki in da house!", "THE bot has arrived!", "Did you ou miss me?", "Helloooo? Is anyone there??", "Knock knock! Who's there? It's me!", "No need to worry. I'm here now!", "I know you were lonely without me. ;)"
    ];

    var response = responses[Math.floor(Math.random()*responses.length)];

    bot.reply(message, response);
    bot.reply(message, introduction);


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
