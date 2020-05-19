exports.seed = function (knex) {
  const users = [
    {
      username: "Liam",
      password: "123",
      department: 1,
    },
    {
      username: "Noah",
      password: "pizza",
      department: 3,
    },
    {
      username: "William",
      password: "secret",
      department: 1,
    },
    {
      username: "James",
      password: "password",
      department: 2,
    },
    {
      username: "Justin",
      password: "dogs",
    },
  ];
  return knex("users").insert(users);
};
