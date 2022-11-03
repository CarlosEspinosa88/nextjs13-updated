'use client';

import Link from 'next/link'
import { useSelectedLayoutSegments } from 'next/navigation'

const DEFAULT_PATH = '/' 

export default function NavLink({ href, children }) {
  let segment = useSelectedLayoutSegments();
  let path = segment[0] ? `/${segment[0]}` : DEFAULT_PATH
  let active = href === path

  return (
    <Link className={ active ? 'underline' : ''} href={href}>
      {children}
    </Link>
  )
}