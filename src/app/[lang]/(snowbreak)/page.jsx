"use client";

import ColumnInput from "@/components/controls/ColumnInput";
import RowInput from "@/components/controls/RowInput";
import DiamondsInput from "@/components/controls/DiamondsInput";
import TetrisHighestPrioritySelect from "@/components/controls/TetrisHighestPrioritySelect";
import TetrisLowestPrioritySelect from "@/components/controls/TetrisLowestPrioritySelect";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/Button";
import useStore from "@/store/store";
import { solve } from "@/lib/calc";
import styles from "./home.module.css";
import { CubeIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";
import useIntl from "@/hooks/use-intl";

export default function Home() {
  const [res, setRes] = useState(false);
  const [now, setNow] = useState(0);
  const diamondNumber = useStore((state) => state.diamondNumber);
  const board = useStore((state) => state.board);
  const color = useStore((state) => state.color);
  const diamondsHighestPrioritySelect = useStore(
    (state) => state.diamondsHighestPrioritySelect
  );
  const diamondsLowestPrioritySelect = useStore(
    (state) => state.diamondsLowestPrioritySelect
  );
  const { t, locale } = useIntl("tools");

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    if (queryParams.size === 0) return;
    const state = Object.fromEntries(queryParams);

    useStore.setState({
      ...state,
      col: Number(state.col || 5),
      row: Number(state.row || 6),
      board: Array(col)
        .fill(null)
        .map(() => Array(row).fill(-1)),
      diamondNumber: Array(11).fill(-1),
    });
  });

  const tuneBox = (x, y) => {
    const newBoard = [...board];
    if (newBoard[x][y] === -1) {
      newBoard[x][y] = 0;
    } else {
      newBoard[x][y] = -1;
    }
    useStore.setState({ board: newBoard });
  };

  const calc = () => {
    setRes(
      solve(
        board,
        diamondNumber,
        diamondsHighestPrioritySelect,
        diamondsLowestPrioritySelect
      )
    );
    setNow(0);
  };

  const sol = res ? res[now] : [];
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        <div>
          {board.map((r, i) => (
            <div key={i} style={{ height: "32px" }}>
              {r.map((c, j) => (
                <div
                  key={j}
                  className={styles.board}
                  onClick={() => tuneBox(i, j)}
                  style={{ backgroundColor: c === 0 ? "white" : "red" }}
                />
              ))}
            </div>
          ))}
        </div>
        <div>
          {sol &&
            sol.map((r, i) => (
              <div key={i} style={{ height: "32px" }}>
                {r.map((c, j) => (
                  <div
                    key={j}
                    className={styles.board}
                    style={{ backgroundColor: color[c] }}
                  >
                    {c}
                  </div>
                ))}
              </div>
            ))}
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-sm">
            {t({
              id: "calculate_desc",
              defaultMessage:
                "Red indicates the grid that needs to be placed, white indicates there is no grid here, click to switch",
            })}
          </p>
          {board.length > 0 && (
            <Button onClick={calc}>
              <CubeIcon className="mr-2" />
              {t({
                id: "calculate",
                defaultMessage: "Calculate",
              })}
            </Button>
          )}
          {res !== false && (
            <div className="bg-vulcan-100 mt-2 block w-full rounded-lg p-4 md:inline-block lg:w-auto">
              <table>
                <tbody>
                  <tr key="scenarios">
                    <td className="border-b border-gray-800 py-1 text-right">
                      <div className="whitespace-no-wrap mr-2 text-white">
                        <span className="text-white">
                          {t({
                            id: "total",
                            defaultMessage: "方案数",
                          })}
                        </span>
                        <span>:</span>
                      </div>
                    </td>
                    <td className="border-b border-gray-800 py-1">
                      <span className="mr-2">{res.length}</span>
                    </td>
                  </tr>
                  <tr key="now">
                    <td className="border-b border-gray-800 py-1 text-right">
                      <div className="whitespace-no-wrap mr-2 text-white">
                        <span className="text-white">
                          {t({
                            id: "now",
                            defaultMessage: "当前展示方案",
                          })}
                        </span>
                        <span>:</span>
                      </div>
                    </td>
                    <td className="border-b border-gray-800 py-1">
                      <span className="mr-2">
                        {now + 1} / {res.length}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
          {res.length > 0 && (
            <div>
              <Button
                onClick={() =>
                  setNow((prevNow) => prevNow - (prevNow > 0 ? 1 : 0))
                }
              >
                {"<"}
              </Button>
              <Button
                onClick={() =>
                  setNow(
                    (prevNow) => prevNow + (prevNow + 1 < res.length ? 1 : 0)
                  )
                }
              >
                {">"}
              </Button>
            </div>
          )}
        </div>
      </div>
      <div className="flex min-h-screen flex-col items-center justify-center py-2">
        <main className="dark flex min-h-screen items-center justify-center bg-neutral-950 text-white">
          <Card className="fixed bottom-16 mx-6 bg-neutral-900/90 px-8 py-6 backdrop-blur">
            <CardContent className="flex flex-wrap gap-3 p-0">
              <ColumnInput />
              <RowInput />
              <DiamondsInput />
              <TetrisHighestPrioritySelect />
              <TetrisLowestPrioritySelect />
            </CardContent>
          </Card>
        </main>
      </div>
    </>
  );
}
