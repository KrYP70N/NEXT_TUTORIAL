# Layout

You can create layout component by creating `layout.tsx` file under specific folder(route) and can access page components from `child props`. Check example under following section.

```
import NavComponent from "@/components/nav/nav.component";

interface Props {
    children: React.ReactNode
}

const Layout : React.FC<Props> = ({ children }) =>  {
    return (
      <>
        <NavComponent />
        <p>layout </p>
        {children}
      </>
    );
}
```


## Loading Screen

You can insert loading screen for your pages by creating component name with `loading.tsx` under `app` or specied route directory. 

```
const LoadingScreen = () => {
    return (
        <p>loading</p>
    )
}

export default LoadingScreen
```

## Error Screen

For the error screen you just need to create a component with `error.tsx` name under `app` directory.
> you need to use "use client" and "use modules" directive for error.tsx, will explain these two directives later.

```
"use client"
"use modules"

const ErrorScreen = () => {
    return (
        <p>Error</p>
    )
}

export default ErrorScreen

```

## Not Found Sceen

Same like loading and error screen, you can create custom not found page with `not-found.tsx`.
