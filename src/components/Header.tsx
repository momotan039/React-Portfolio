import  { useState } from 'react'

function Header() {
    const [showMobileMenu, SetShowMobileMenu] = useState(false)
  return (
    <header >
            <nav id="main-menu">
                <button onClick={()=>SetShowMobileMenu(!showMobileMenu)} id="btnBarMenu"><i className={`fa ${showMobileMenu?'fa-close':'fa-bars'}`}></i></button>
                <ul className={showMobileMenu?'show':''}>
                    <a onClick={()=>SetShowMobileMenu(false)} href="#about">
                        <li>About</li>
                    </a>
                    <a onClick={()=>SetShowMobileMenu(false)} href="#experience">
                        <li>Experience</li>
                    </a>
                    <a onClick={()=>SetShowMobileMenu(false)} href="#skills">
                        <li>Skills</li>
                    </a>
                    <a onClick={()=>SetShowMobileMenu(false)} href="#projects">
                        <li>Projects</li>
                    </a>
                    <a onClick={()=>SetShowMobileMenu(false)} href="#contact">
                        <li>Contact</li>
                    </a>
                </ul>
            </nav>
        </header>
  )
}

export default Header