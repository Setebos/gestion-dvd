Router.configure({
    layoutTemplate: 'layout'
    // waitOn: function() {
    //  return [Meteor.subscribe('books'), Meteor.subscribe('pages')]
    // }
});

Router.route('/', {
    name: 'homepage',
    waitOn: function() {
        return [
            Meteor.subscribe('movies'),
            Meteor.subscribe('categories')
        ];
    }
});

Router.route('/movie/show/:_id', {
    name: 'showMovie',
    waitOn: function() {
        return [
            Meteor.subscribe('oneMovie', this.params._id),
            Meteor.subscribe('categories')
        ];
    },
     data: function() { 
        return Movies.findOne({_id: this.params._id});
    }
});

Router.route('/category/show/:_id', {
    name: 'showCategory',
    waitOn: function() {
        return [
            Meteor.subscribe('moviesByCategory', this.params._id),
            Meteor.subscribe('oneCategory', this.params._id)
        ];
    },
    data: function() { 
        return Categories.findOne({_id: this.params._id});
    }
});