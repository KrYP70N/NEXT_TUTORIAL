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

export default Layout
  