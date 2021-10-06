var DB = {
  teams: [
    {
      id: 1,
      name: "Atlético-PR",
      city: "Curitiba",
      state: "Paraná",
      serie: "A",
      titles: [
        {
          stateChampionships: 4,
        },
        {
          nacionalChampionships: 5,
        },
        {
          internacionalChampionships: 5,
        },
      ],
      payroall: 400.0,
    },
    {
      id: 2,
      name: "Coritiba",
      city: "Curitiba",
      state: "Paraná",
      serie: "B",
      titles: [
        {
          state: 1,
        },
        {
          nacional: 2,
        },
        {
          internacional: 5,
        },
      ],
      payroall: 350.0,
    },
  ],
};
module.exports = DB;
