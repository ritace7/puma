import footerLogo from "../../public/favicon.ico";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img 
              src={footerLogo}
              width={43}
              height={46}
            />
          </a>
          <p className="mt-5 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
            Thank you for exploring the world of Puma. 
            Whether you're gearing up for your next workout, elevating your street style, or embracing casual comfort, 
            Puma is here to accompany every step of your journey. 
          </p>
          <div className="flex items-center gap-5 mt-8">
              {socialMedia.map((icon)=>(
                  <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
                    <img 
                      src={icon.src}
                      alt={icon.alt}
                      width={50}
                      height={50}
                    />
                  </div>
              ))}
          </div>
        </div>

        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">
                  {section.title}
                </h4>
                <ul>
                  {section.links.map((link) => (
                    <li 
                      className="mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer"
                      key={link.name}
                    >
                      <a href={link.link} target="_blank">{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      </div>

      <div className="flex justify-end text-white-400 mt-10 ">
          &copy; Created By
          <a 
            href="https://www.linkedin.com/in/hritesh7/" 
            target="_blank" 
            rel="noreferrer"
            className="ml-1 font-pixelify text-xl text-coral-red"
          >
            RITACE
          </a>
      </div>
    </footer>
  )
}

export default Footer