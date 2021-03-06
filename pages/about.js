import React, { Fragment } from "react";

// components
import Layout from "../components/layout";
import About from "../components/about/about";

export default function index () {
    return (
        <Fragment>
            <Layout title="My Portofolio | About">
                {/* main */}
                <div className="mb-5">
                    <About/>
                </div>
                {/* end (main) */}
            </Layout>
        </Fragment>
    );
}