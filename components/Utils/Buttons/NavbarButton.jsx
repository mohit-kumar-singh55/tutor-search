const NavbarButton = (props) => {
  return (
    <div className="flex w-full justify-center">
      <button
        type={props.type}
        className="h-[30px] rounded-2xl bg-gradient-to-r from-pink to-gradient_yellow px-4 text-sm font-bold uppercase text-white sm:h-[46px] sm:rounded-3xl sm:px-12"
      >
        {props.label}
      </button>
    </div>
  )
}

export default NavbarButton
