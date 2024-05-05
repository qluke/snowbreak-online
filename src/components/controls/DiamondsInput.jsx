import { Input } from "../ui/Input";
import useStore from "@/store/store";
import useIntl from "@/hooks/use-intl";

function DiamondsInput() {
  const diamondNumber = useStore((state) => state.diamondNumber);
  const { t, locale } = useIntl("controls");

  return (
    <>
      {diamondNumber.map((number, index) => (
        <div key={index}>
          <label className="mb-2 block text-xs font-medium text-neutral-400">
            {t({
              id: "tetrimino",
              defaultMessage: "Tetrimino",
            })}
            {`${index + 1}`}
          </label>
          <Input
            type="number"
            className="!dark w-16 bg-transparent"
            value={number}
            onChange={(e) =>
              useStore.setState((state) => {
                const newDiamondNumbers = [...state.diamondNumber];
                newDiamondNumbers[index] = Number(e.target.value);
                return { diamondNumber: newDiamondNumbers };
              })
            }
            max={99}
            min={0}
            step={1}
          />
        </div>
      ))}
    </>
  );
}

export default DiamondsInput;
