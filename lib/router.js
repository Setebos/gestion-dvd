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
    name: 'showMovie'
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
        cat =  Categories.findOne({_id: this.params._id});
        console.log(cat);
        return cat;
    }
});