import React, { FunctionComponent } from 'react'
// import "../../../styles/YouTubeForm.css";


const ErrorText: any = (props: any) => {
    return (
        <div className="error">{props.children}</div>
    )
}

export default ErrorText