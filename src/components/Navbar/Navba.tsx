import AuthShowCase from "./AuthShowCase/AuthShowCase" 

const Navbar:React.FC = () => {
  return (
    <nav className="flex items-center justify-end bg-[#2e026d] px-6 py-4 text-white">
      <AuthShowCase />
    </nav>
  )
}

export default Navbar;