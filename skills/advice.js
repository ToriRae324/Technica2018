module.exports = function(controller) {

    //all advice
    controller.hears(["^advice", "^I need advice"], 'direct_message,direct_mention', function(bot, message) {

        var responses = [
            "Life is 10% what happens to you and 90% how you react to it.", "Get out of your comfort zone and try new things.", "Life is short, don’t waste it living someone else’s life.", "Keep your face always toward the sunshine - and shadows will fall behind you.", "Live simply: Expect little, give much.", "Don't let a bad day make you feel like you have a bad life.", "The best way to predict the future is to create it.", "I can not do everything, but I can do something. I must not fail to do the something that I can do.", "Do not be too timid and squeamish about your actions. All life is an experiment.", "When nothing is working , go to sleep , start fresh.", "Value the time, spend it wisely.", "Worrying means you suffer twice.", "Choose a job you love, and you will never have to work a day in your life.", "It's not what you achieve, it's what you overcome.", "If you wait for perfect conditions, you will never get anything done.", "The worst days of those who enjoy what they do are better than the best days of those who don’t.", "I want to look back on my career and be proud of the work, and be proud that I tried everything.", "A mind troubled by doubt cannot focus on the course to victory."
          ];
      
          var response = responses[Math.floor(Math.random()*responses.length)];
      
          bot.reply(message, response);      
        
    });

    // life advice
    controller.hears(["^life advice", "^I need life advice"], 'direct_message,direct_mention', function(bot, message) {

        var responses = [
            "Life is 10% what happens to you and 90% how you react to it.", "Get out of your comfort zone and try new things.", "Life is short, don’t waste it living someone else’s life.", "Keep your face always toward the sunshine - and shadows will fall behind you.", "Live simply: Expect little, give much.", "Don't let a bad day make you feel like you have a bad life.", "The best way to predict the future is to create it.", "I can not do everything, but I can do something. I must not fail to do the something that I can do.", "Do not be too timid and squeamish about your actions. All life is an experiment."
          ];
      
          var response = responses[Math.floor(Math.random()*responses.length)];
      
          bot.reply(message, response);      
        
    });


    //  advice
    controller.hears(["^work advice", "^I need work advice"], 'direct_message,direct_mention', function(bot, message) {

        var responses = [
            "When nothing is working , go to sleep , start fresh.", "Value the time, spend it wisely.", "Worrying means you suffer twice.", "Choose a job you love, and you will never have to work a day in your life.", "It's not what you achieve, it's what you overcome.", "If you wait for perfect conditions, you will never get anything done.", "The worst days of those who enjoy what they do are better than the best days of those who don’t.", "I want to look back on my career and be proud of the work, and be proud that I tried everything.", "A mind troubled by doubt cannot focus on the course to victory."
          ];
      
          var response = responses[Math.floor(Math.random()*responses.length)];
      
          bot.reply(message, response);      
        
    });

}