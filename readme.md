# Current Path

You need to know current path/route for various reason. For this you just need to use `usePath()` with `use client` module.

```
"use client"
import { usePathname } from 'next/navigation'
import styles from './nav.component.module.css'
import Link from 'next/link'

const NavComponent = () => {

    const path = usePathname()

    console.log(path)

    return (
        <header className={styles.container}>
            <h1>nav component</h1>
            <Link href='/about' className={`${path === '/about'} && 'active'`} >About</Link>
        </header>
    )
}

export default NavComponent
```
