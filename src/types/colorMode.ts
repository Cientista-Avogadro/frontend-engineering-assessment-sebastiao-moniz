export interface IColorModeProps {
  theme: IThemeProps;
  setTheme(theme: IThemeProps): void;
  onChangeTheme: () => void;
  info: "light" | "dark" |string;
  setInfo(theme: "light" | "dark" | string): void;
}

export interface IThemeProps {
  primary: string;
  secondary: string;
  text: string;
}
