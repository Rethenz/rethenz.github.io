import React from "react";


const layout = () => {
    const block = 'b-layout';
    const blockElem = 'b-layout__';

    return (
        <div className={block}>
            <h1 className={`${blockElem}title`}>Тут контент</h1>
        </div>
    )
}

export default layout;