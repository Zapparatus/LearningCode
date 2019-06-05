function loadUsers(userIds, load, done) {
  let loaded = 0;
  let users = [];
  userIds.forEach(function(id, index) {
    load(id, function(user) {
      users[index] = user;
      loaded += 1;
      if (loaded === userIdes.length) return done(users);
    });
  });
}

module.exports = loadUsers;