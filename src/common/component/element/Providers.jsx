// app/providers.tsx
"use client";

// import {NextUIProvider} from 'src/nextui-org/react'
import {ThemeProvider} from "next-themes";

export function Providers({children}) {
  return (
    <div>
      <ThemeProvider defaultTheme="light" enableSystem={false}>
        {children}
      </ThemeProvider>

    </div>
  )
}