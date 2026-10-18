import type {Metadata} from 'next';
import './globals.css';
export const metadata:Metadata={title:'Po — Minecraft Developer',description:'Ideas, código y comunidades. Descubre mi trabajo en servidores Minecraft, plugins, mods y proyectos propios.',icons:{icon:'/favicon.svg'}};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="es"><body>{children}</body></html>}
