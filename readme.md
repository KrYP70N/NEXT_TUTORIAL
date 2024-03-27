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


# Loading Component

You can insert loading screen for your pages by creating component name with `loading.tsx` under `app` directory. 

```
const LoadingScreen = () => {
    return (
        <p>loading</p>
    )
}

export default LoadingScreen
```