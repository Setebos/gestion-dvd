Template.homepage.helpers({
    movies: function() {
        return Movies.find();
    },

    categories: function() {
        return Categories.find();
    }
});