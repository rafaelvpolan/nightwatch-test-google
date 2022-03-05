const chromedriver =  require('chromedriver')


modules.exports = {
    before: function(done){
        chromedriver.start()
        done()
    },

    after: function(done){
        chromedriver.stop()
        done()
    }
}