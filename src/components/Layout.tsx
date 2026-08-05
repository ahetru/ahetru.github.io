import type { ReactNode } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import './Layout.css'

export interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </>
  )
}