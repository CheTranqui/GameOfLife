"use client"

import React from "react";
import Skillset from "@components/skills/skillset";

const Summary = (props) => {
    
    return (
        <section className="summaryWrapper">
            <Skillset skillsetName={props.primarySkillset}/>
            <Skillset skillsetName={props.secondarySkillset}/>
        </section>
    );
}

export default Summary;