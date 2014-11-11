Router.configure({
    layoutTemplate: 'layout'
    // waitOn: function() {
    //  return [Meteor.subscribe('books'), Meteor.subscribe('pages')]
    // }
});

Router.route('/', {
    name: 'homepage',
    waitOn: function() {
        return Meteor.subscribe('movies');
    }
});

Router.route('/movie/show/:_id', {
    name: 'showMovie'
});