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
            src={"http://54.255.155.248:3001/"}
        /> 
    )
};
export default Scanner;
