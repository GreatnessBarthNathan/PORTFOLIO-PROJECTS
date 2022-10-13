import React from "react"
import { useGlobalContext } from "../../context"
import SingleSubmenu from "../SingleSubmenu"

const Submenu = () => {
  const { submenu, showSubmenu } = useGlobalContext()

  if (showSubmenu) {
    return (
      <section className='submenu-container show'>
        <div className='submenu'>
          {submenu.map((item, index) => (
            <SingleSubmenu key={index} {...item} />
          ))}
        </div>
      </section>
    )
  }
}

export default Submenu
