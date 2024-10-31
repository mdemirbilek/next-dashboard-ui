import Image from "next/image"

const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4'>
      
      {/* Search Bar */}
      <div className="hidden md:flex">
        <Image src="/search.png" alt="" width={21} height={14} />
        <input type="text" placeholder="Search..."></input>
      </div>

      {/* Icons and User */}
      <div className="">
        <div>
          <Image src="/message.png" alt="" width={20} height={20} />
        </div>

      </div>
      
    </div>
  )
}

export default Navbar