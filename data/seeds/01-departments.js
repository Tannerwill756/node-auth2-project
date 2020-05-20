exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("departments").then(function () {
    // Inserts seed entries
    return knex("departments").insert([
      { name: "Engineering" },
      { name: "WareHouse" },
      { name: "Contractors" },
    ]);
  });
};
