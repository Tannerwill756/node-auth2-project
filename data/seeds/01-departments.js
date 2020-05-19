exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("departments")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("departments").insert([
        { id: 1, name: "Engineering" },
        { id: 2, name: "WareHouse" },
        { id: 3, name: "Contractors" },
      ]);
    });
};
