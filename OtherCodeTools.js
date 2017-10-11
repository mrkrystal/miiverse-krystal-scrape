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



// All of them
var allPosts = _.flatten(_.values(data));



// Actual duplicates
_.keys(_.pickBy(_.countBy(_.flatten(_.values(data))), (v) => {
    return v > 1;
}));



_.keys(_.pickBy(_.countBy(_.flatten(allPosts, newBatch)), (v) => {
    return v > 1;
}));
