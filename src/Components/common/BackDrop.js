const { propTypes } = require("react-bootstrap/esm/Image")

const BackDrop=(props)=>{
    return(
        <div className="bg-black opacity-60 w-full h-full fixed z-10 inset-0 overflow-hidden" onClick={props.onClick}>
            {propTypes.children}
        </div>
    )
}
export default BackDrop