import * as React from "react"
import ResumeHTML from '../../static/resume.html'
// import InnerHTML from "dangerously-set-html-content";
import Layout from "../components/layout"

const ResumePage = () => {
    return (
        <Layout>
            <div
            style={{
                width: "100%",
                height: "100%"
            }}
                dangerouslySetInnerHTML={{
                    __html: ResumeHTML
                }}
            />
        </Layout>
    )
}

export default ResumePage