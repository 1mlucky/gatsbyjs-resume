import React, { useEffect, useRef, memo } from 'react';
import Layout from '../components/layout';
import { Embed } from 'theme-ui'

const Scanner = () => {
    return (
        <Embed
            sx={{
                height: "100vh",
                width: "100vw",
                maxWidth: "100%",
                margin: 0,
                frameBorder: 0,
                scrolling: 'no',
                overflow: 'hidden',
                scrollbarWidth: 'none'
            }}
            src={"https://mtest.malpasonline.co.uk"}
        /> 
    )
};
export default Scanner;