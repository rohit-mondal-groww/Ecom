export interface ISearchBarProps {
  onClearInput: () => void;
  onPressIn: () => void;
  searchString: string;
  onChangeText: (newSearch: string) => void;
  onSubmitInput: () => void;
  autofocus?: boolean;
  placeholderText?: string;
}
