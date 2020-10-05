export interface option {
  label: string;
  value: string;
}
[];
export interface DropdownProps {
  options: option[];
  onSelectedChange: Function;
  selected: {
    label: string;
    value: string;
  };
  label: string;
}

export interface ConvertProps {
  language: option;
  text: string;
}
