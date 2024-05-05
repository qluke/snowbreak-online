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

function TetrisLowestPrioritySelect() {
  const diamondsLowestPrioritySelect = useStore(
    (state) => state.diamondsLowestPrioritySelect
  );

  const { t, locale } = useIntl("controls");

  return (
    <div>
      <label className="mb-2 block text-xs font-medium text-neutral-400">
        {t({
          id: "mostRemainingBlock",
          defaultMessage: "Use as little as possible",
        })}
      </label>
      <Select
        value={diamondsLowestPrioritySelect}
        onValueChange={(diamondsLowestPrioritySelect) =>
          useStore.setState({ diamondsLowestPrioritySelect })
        }
      >
        <SelectTrigger className="w-30">
          <SelectValue placeholder="Select Diamond" />
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

export default TetrisLowestPrioritySelect;
