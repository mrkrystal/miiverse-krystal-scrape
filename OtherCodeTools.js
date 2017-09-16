// Print names of people who contain duplicates
var test = _.each(_.omit(data, 'other'), (array, name) => {
    const uniq = _.uniq(array);
    if (uniq.length !== array.length) {
        console.log(name);
    }
});


// Check that there are no duplicates among named lists
var allTogether = _.flatten(_.values(_.omit(data, 'other')));
allTogether.length
_.uniq(allTogether).length



// Strip out other links that already exist among the other artists
_.difference(data.other, _.flatten(_.values(_.omit(data, 'other'))));
