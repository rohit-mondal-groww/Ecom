export interface ISearchBarProps {
  onClearInput: () => void;
  onPressIn: () => void;
  onBackIconPress: () => void;
  searchString: string;
  onChangeText: (newSearch: string) => void;
  onClearIconPress: () => void;
  onSubmitInput: () => void;
  autofocus?: boolean;
  placeholderText?: string;
}
