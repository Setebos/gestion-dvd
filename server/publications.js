Meteor.publish('movies', function() {
    return Movies.find();
});

Meteor.publish('moviesByCategory', function(id) {
    return Movies.find({categoryId: id});
});

Meteor.publish('categories', function() {
    return Categories.find();
});

Meteor.publish('oneCategory', function(id) {
    return Categories.find({_id: id});
});