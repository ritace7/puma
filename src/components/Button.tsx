interface ButtonProps {
    label: string,
    iconUrl: string | null,
    fullWidth: boolean
}

const Button = ({label, iconUrl, fullWidth} : ButtonProps) => {
  const handleClick = () => {
    window.open("https://au.puma.com/", "_blank");
  }
  
  return (
    <button 
      className={`flex justify-center items-center gap-2 px-7 
        py-4 border font-montserrat text-lg leading-none bg-coral-red
        rounded-full ${fullWidth && 'w-full'}  text-white border-coral-red
      `}
      onClick={handleClick}
    >
        {label}
  
     {iconUrl && 
      <img 
        src={iconUrl} 
        alt="arrow right icon" 
        className="ml-2 rounded-full w-5 h-5"
      />
      }
    </button>
  )
}

export default Button