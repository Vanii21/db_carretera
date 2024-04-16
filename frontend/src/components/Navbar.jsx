import Itemnav from "./Itemnav";
import data from '../data/data_Icons'

const Navbar = () => {
  return (
    <div className="container">

        <input type="checkbox" id="click" />
        <label htmlFor="click">
            <i className='menu-btn bx bx-menu'></i>
            <i className='close-btn bx bx-x-circle'></i>
        </label>

        <div className="sidenav">
            <div className="logo">
                <h2 className="nav__title">Carreteras GT</h2>
            </div>

            <div className="search_bar">
                <form action="#">
                    <i className='bx bx-search'></i>
                    <input type="text" placeholder="Search..." />
                </form>
            </div>

            <div className="menu_text">
                <p>Menu</p>
            </div>

            <div className="icon_items">
                <ul>
                    {data.map( ({ icon, title, link }) => (<Itemnav key={title} icon={icon} title={title} link={link}/>))}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar;
