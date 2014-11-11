Meteor.publish('movies', function() {
    return Movies.find();
});