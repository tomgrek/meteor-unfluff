Unfluff = Npm.require('unfluff');

_.extend(Meteor, {
  unfluff: function(html) {
    return Unfluff(html);
  }
});
