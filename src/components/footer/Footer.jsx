import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
    <div className="footer_container container">
        <h1 className="footer_title">Amaan's</h1>
        <ul className="footer_list">
            <li>
                <a href="#about" className="footer_link">About</a>
            </li>
            <li>
                <a href="#portfolio" className="footer_link">Projects</a>
            </li>
            <li>
                <a href="#testimonials" className="footer_link">Testiomonials</a>
            </li>
        </ul>
    </div>
</footer>

  )
}

export default Footer
