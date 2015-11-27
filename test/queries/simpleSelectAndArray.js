module.exports = {

  // A description. This is used for display in the test output.
  description: 'Should construct a simple select query with array-ish AND clause',

  // The name of the table this query should be ran against.
  table      : 'foo',

  // The query object used to build this query.
  query      : {
    where: {
      and: [
        {color: 'blue'},
        {color: 'red'}
      ]
    }
  },

  // Expected results per query method.
  expected   : {

    // Sequel.select()
    select: {

      // The queryString we expect to be rendered after calling `Sequel.select()`
      queryString    : 'SELECT `foo`.`color`, `foo`.`id`, `foo`.`createdAt`, `foo`.`updatedAt`, `foo`.`bar`, `foo`.`bat`, `foo`.`baz` FROM `foo` AS `foo` ',

      // The number of queries that will be returned after calling Sequel.select()
      queriesReturned: 1
    },

    // Sequel.find()
    find  : {

      // The queryString we expect to be rendered after calling `Sequel.find()`
      queryString    : 'SELECT `foo`.`color`, `foo`.`id`, `foo`.`createdAt`, `foo`.`updatedAt`, `foo`.`bar`, `foo`.`bat`, `foo`.`baz` FROM `foo` AS `foo` ' +
      ' WHERE ((LOWER(`foo`.`color`) = "blue") AND (LOWER(`foo`.`color`) = "red")) ',

      // The number of queries that will be returned after calling Sequel.find()
      queriesReturned: 1
    }
  }
};
