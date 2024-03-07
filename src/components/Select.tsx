import {
  Select as SelectContainer,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";

type Props = {
  items: { key: string; value: string }[]; //TODO enum
  placeholder: string;
};

export const Select = ({ placeholder, items }: Props) => {
  return (
    <SelectContainer>
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {items.map(({ key, value }) => (
            <SelectItem key={key} value={value}>
              {key}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </SelectContainer>
  );
};
