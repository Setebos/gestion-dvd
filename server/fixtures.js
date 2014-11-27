if(Meteor.users.find().count() === 0) {
    var now = new Date().getTime();
    
    var setebosId = Accounts.createUser({
        username: 'Setebos',
        password: 'password'
    });

    var setebos = Meteor.users.findOne(setebosId);

    var category1 = Categories.insert({
        title: 'Categorie 1',
        image: 'http://www.halopedia.org/images/thumb/5/5d/Superintendant-alone.svg/275px-Superintendant-alone.svg.png'
    })

    var category2 = Categories.insert({
        title: 'Categorie 2',
        image: 'http://www.halopedia.org/images/thumb/5/5d/Superintendant-alone.svg/275px-Superintendant-alone.svg.png'
    })

    Movies.insert({
        title: 'Film 1',
        description: 'Ceci est une description de film',
        categoryId: category1,
        creationDate: now - 7 * 3600 * 1000,
        image: 'http://www.halopedia.org/images/thumb/5/5d/Superintendant-alone.svg/275px-Superintendant-alone.svg.png',
        director: "Mr Machin",
        realisationDate : now,
    });

    Movies.insert({
        title: 'Film 2',
        description: 'Ceci est une description de film',
        categoryId: category1,
        creationDate: now,
        image: 'http://www.halopedia.org/images/thumb/5/5d/Superintendant-alone.svg/275px-Superintendant-alone.svg.png',
        director: "Mr Truc",
        realisationDate : now,
    });

    Movies.insert({
        title: 'Film 3',
        description: 'Ceci est une description de film',
        categoryId: category2,
        creationDate: now - 5 * 3600 * 1000,
        image: 'http://www.halopedia.org/images/thumb/5/5d/Superintendant-alone.svg/275px-Superintendant-alone.svg.png',
        director: "Mr Bidule",
        realisationDate : now,
    });
}