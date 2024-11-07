import 'react'
import './Header.css'
import me from '../src/assets/me.png'

function Header() {
  return (
    <div className='cls-header'>
        <img src={me} alt="" />
        <h1><span>I'm Heba Mohamed, </span>frontend developer based in Egypt.</h1>
        <p>I'm frontend developer from Egypt ,with 1 year of experience.</p>
        <div className="cls-header-action">
            <div className="cls-header-connect">Connect With Me</div>
            <div className="cls-header-resume">My resume</div>
        </div>
    </div>
  )
}

export default Header;