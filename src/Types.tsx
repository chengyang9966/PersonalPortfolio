const Mode = {
  light: "light-mode",
  dark: "dark-mode",
};
type HeaderType = {
  theme: (txt: string) => void;
};
type ArrayType = {
  title: string;
  text: string;
  href: string;
  iconClass?: string;
  icons: any;
};

export { Mode };
export type { HeaderType, ArrayType };
