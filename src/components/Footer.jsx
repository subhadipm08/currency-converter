const Footer = () => {
  return (
    <div className="flex flex-col w-full items-center justify-evenly py-2">
      <p className="text-sm text-white opacity-80 my-2">
        Made with {"\u2764\uFE0F"} by Subha
      </p>
      <a href="https://github.com/subhadipm08" className="text-sm text-white opacity-80 hover:underline" target="_blank" rel="noopener noreferrer">
        <img src="/github.png" alt="GitHub" className="h-5 w-5" />
      </a>

    </div>
  )
}

export default Footer
