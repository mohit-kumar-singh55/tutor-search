const AuthButton = (props) => {
  const { onClick } = props
  return (
    <div className="flex w-full justify-center">
      <button
        type={props.type}
        className="h-[46px] w-[186px] rounded-3xl bg-gradient-to-r from-pink to-gradient_yellow font-bold uppercase text-white"
        onClick={onClick}
      >
        {props.label}
      </button>
    </div>
  )
}

export default AuthButton
