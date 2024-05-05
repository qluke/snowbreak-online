export const diamonds = {
  diamonds1: {
    name: "diamonds1",
    id: 0,
  },
  diamonds2: {
    name: "diamonds2",
    id: 1,
  },
  diamonds3: {
    name: "diamonds3",
    id: 2,
  },
  diamonds4: {
    name: "diamonds4",
    id: 3,
  },
  diamonds5: {
    name: "diamonds5",
    id: 4,
  },
  diamonds6: {
    name: "diamonds6",
    id: 5,
  },
  diamonds7: {
    name: "diamonds7",
    id: 6,
  },
  diamonds8: {
    name: "diamonds8",
    id: 7,
  },
  diamonds9: {
    name: "diamonds9",
    id: 8,
  },
  diamonds10: {
    name: "diamonds10",
    id: 9,
  },
  diamonds11: {
    name: "diamonds11",
    id: 10,
  },
};


export function getIdByName(name) {
  let diamond = Object.values(diamonds).find(d => d.name === name);
  return diamond ? diamond.id : 0;
}
