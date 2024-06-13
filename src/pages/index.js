import * as React from "react"
import ResumeHTML from '../../static/resume.html'
// import InnerHTML from "dangerously-set-html-content";
import Layout from "../components/layout"

const IndexPage = () => {
    return (
        <Layout>
            <div
            style={{
                width: "100vw",
                height: "100vh"
            }}
                dangerouslySetInnerHTML={{
                    __html: ResumeHTML
                }}
            />
        </Layout>
    )
}

export default IndexPage