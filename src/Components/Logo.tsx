const Logo = () => {
  return (
    <div className="basis-[15%] px-1 cursor-pointer ">
      <h1
        className="font-lilita tracking-wider md:tracking-widest antialiased font-black text-2xl text-blue-500 p-1 text-center"
        onClick={() => window.scroll(0, 0)}
      >
        Nike
      </h1>
    </div>
  )
}

export default Logo
