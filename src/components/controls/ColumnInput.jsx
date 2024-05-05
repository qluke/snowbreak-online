import { Input } from "../ui/Input";
import useStore from "@/store/store";
import useIntl from "@/hooks/use-intl";

function ColumnInput() {
  const col = useStore((state) => state.col);
  const row = useStore((state) => state.row);
  const { t, locale } = useIntl("controls");

  return (
    <div>
      <label className="mb-2 block text-xs font-medium text-neutral-400">
        {t({
          id: "column",
          defaultMessage: "Columns",
        })}
      </label>
      <Input
        type="number"
        className="!dark w-16 bg-transparent"
        min={1}
        max={10}
        value={col}
        onChange={(e) => {
          useStore.setState({
            col: Number(e.target.value),
            board: Array(Number(e.target.value))
              .fill(null)
              .map(() => Array(row).fill(-1)),
          });
        }}
      />
    </div>
  );
}

export default ColumnInput;
