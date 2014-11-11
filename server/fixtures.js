if(Meteor.users.find().count() === 0) {
    var setebosId = Accounts.createUser({
        username: 'Setebos',
        password: 'password'
    });

    var setebos = Meteor.users.findOne(setebosId);

    Movies.insert({
        title: 'Film 1',
        description: 'Ceci est une description de film'
    });

    Movies.insert({
        title: 'Film 2',
        description: 'Ceci est une description de film'
    });

    Movies.insert({
        title: 'Film 3',
        description: 'Ceci est une description de film'
    });
}