import { diamonds } from "./options.js";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import useStore from "@/store/store";
import useIntl from "@/hooks/use-intl";

function TetrisHighestPrioritySelect() {
  const diamondsHighestPrioritySelect = useStore(
    (state) => state.diamondsHighestPrioritySelect
  );
  const { t, locale } = useIntl("controls");

  return (
    <div>
      <label className="mb-2 block text-xs font-medium text-neutral-400">
        {t({
          id: "mostUsedBlock",
          defaultMessage: "Use as much as possible",
        })}
      </label>
      <Select
        value={diamondsHighestPrioritySelect}
        onValueChange={(diamondsHighestPrioritySelect) =>
          useStore.setState({ diamondsHighestPrioritySelect })
        }
      >
        <SelectTrigger className="w-30">
          <SelectValue placeholder="Select Tetrimino" />
        </SelectTrigger>
        <SelectContent className="dark max-h-[500px]">
          {Object.entries(diamonds).map(([id, diamond]) => (
            <SelectItem key={id} value={id}>
              {t({
                id: "tetrimino",
                defaultMessage: "Tetrimino",
              })}
              {diamond.name && diamond.name.replace("diamonds", "")}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

export default TetrisHighestPrioritySelect;
