Template.showMovie.helpers({
    category: function() {
        return Categories.findOne(this.categoryId);
    }
});