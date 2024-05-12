import { ThemeProvider } from "next-themes";
import React from "react";

export default function NextThemeProvider({
  children,
}: React.PropsWithChildren) {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}
