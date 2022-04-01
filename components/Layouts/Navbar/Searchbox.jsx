import Image from 'next/image'
const SearchBox = ({ onSearch }) => {
  return (
    <div className="relative">
      <input
        type="text"
        id="skill"
        placeholder="SEARCH Tutor"
        className="w-[325px] rounded-3xl border-2 py-1 px-4 tracking-widest"
        onKeyUp={(e) => onSearch(e.target.value)}
      />
      <span className="absolute right-3 top-2">
        <Image src="/Images/Navbar/search_icon.png" height={16} width={16} />
      </span>
    </div>
  )
}

export default SearchBox
