import React, { ComponentType } from 'react'
import "../styles/YouTubeForm.css";

type Props = {
    children: React.ReactNode;
}

const TextError = (props: any) => {
    return (
        <div className="error">{props.children}</div>
    )
}

export default TextError