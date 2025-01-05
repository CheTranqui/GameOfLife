"use client"

import React from "react";
import Skillset from "./skillset";

const Summary = () => {

    return (
        <section>
            <Skillset skillsetName="management"/>
            <Skillset skillsetName="health"/>
        </section>
    );
}

export default Summary;