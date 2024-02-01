import { IoIosSend } from "react-icons/io";
const Button = () => {
  return (
    <div>
        <button
              type="submit"
              value="Send"
              className="btn mt-5 bg-Blue text-White border-2 shadow-xl rounded-full border-LightBlue mb-10 hover:bg-Bluesea"
            >
              <IoIosSend /> Send
            </button>
    </div>
  )
}

export default Button