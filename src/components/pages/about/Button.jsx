import { GrDocumentDownload } from "react-icons/gr";
const Button = () => {
  return (
    <div>
        <button className="btn mt-5 bg-Blue text-White border-2 rounded-full border-LightBlue mb-10 hover:bg-Bluesea">
          {" "}
          <GrDocumentDownload/>
          Dwonload CV
        </button>
    </div>
  )
}

export default Button