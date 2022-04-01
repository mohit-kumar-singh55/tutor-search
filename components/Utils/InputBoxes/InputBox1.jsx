const InputBox1 = (props) => {
  return (
    <div className="my-3">
      <input
        type={props.type}
        placeholder={props.label}
        id={props.id}
        className="w-full rounded-lg p-2 text-[#000]"
        required={props.required ? true : false}
      />
    </div>
  )
}

export default InputBox1
