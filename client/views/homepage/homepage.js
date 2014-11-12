Template.homepage.helpers({
    movies: function() {
        return Movies.find({}, {sort: {creationDate:-1}, limit:3});
    },

    categories: function() {
        return Categories.find();
    }
});