import { create } from "zustand";
import { persist } from "zustand/middleware";

const useStore = create(
  persist(
    () => ({
      col: 5,
      row: 6,
      diamondsHighestPrioritySelect: 8,
      diamondsLowestPrioritySelect: 9,
      diamondNumber: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      board: [
        [-1, -1, -1, -1, -1, -1],
        [-1, -1, -1, -1, -1, -1],
        [-1, -1, -1, -1, -1, -1],
        [-1, -1, -1, -1, -1, -1],
        [-1, -1, -1, -1, -1, -1],
      ],
      color: [
        "white",
        "#75C0FF",
        "#3B66CF",
        "#78ACC5",
        "#C8FAFD",
        "#FDFF00",
        "#4BFF00",
        "#FF9800",
        "#B9B24B",
        "#FF00AE",
        "#8A2BE2",
        "#FF00FF",
      ],
    }),
    {
      name: "user-preferences",
    }
  )
);
export default useStore;
