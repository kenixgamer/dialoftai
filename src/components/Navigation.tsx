import { Link } from "react-router-dom"
import BookDemoButton from "./BookDemoButton"
import { scrollToBottom } from "."

const Navigation = ({descriptionRef} : any) => {
  const handleClick = () => {
    descriptionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  return (
    <nav className="flex justify-between items-center h-[59] p-2 md:p-3  mx-2 sm:mx-4">
    <div className="flex items-center">
      <img src="logo.jpg" alt="Dialoft AI Logo" className="h-8 sm:h-12" />
      <span className="ml-2 text-sm font-playfair  sm:text-xl font-bold gradient-text">Dialoft AI</span>
    </div>
    <div className= "flex md:hidden text-sm items-center space-x-3 font-helvetica text-gray-300 tracking-wide" style={{color : "#848895"}}>
    <Link to='/Human-vs-AI' className="hover:text-purple-400">Human VS AI</Link>
    <a href="#" onClick={handleClick} className="hover:text-purple-400">Industries</a>
    </div>
    <div className="hidden md:flex" style={{gap : "21px"}}>
      <div className="flex items-center  space-x-10 lg:space-x-54 text-lg font-helvetica font-medium" style={{color : "#848895"}}>
      <Link to="/pricing" className="hover:text-purple-400 ">Pricing</Link>
      <Link to="/Human-vs-AI" className="hover:text-purple-400 ">Human VS AI</Link>
      <a href="#" onClick={handleClick}  className="hover:text-purple-400 ">Industries</a>
      <a href="#" onClick={scrollToBottom} className="hover:text-purple-400 ">Contact us</a>
      <Link to={'/team'} className="hover:text-purple-400 ">Team</Link>
      </div>
      <div className="">
      <BookDemoButton/>
      </div>
    </div>
  </nav>
  )
}

export default Navigation