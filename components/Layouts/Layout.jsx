import Navbar from './Navbar/Navbar'
const Layout = (props) => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>{props.children}</main>
    </>
  )
}

export default Layout
