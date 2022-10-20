import React from "react";

const Input=React.forwardRef((props,ref)=>
{
    return(
    <div>
    <input ref={ref} {...props.id} />
    </div>
    )
})

export default Input;