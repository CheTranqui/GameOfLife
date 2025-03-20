import React from 'react';
import "./style.css"

import Summary from "@components/skills/summary";
import Skillset from '@components/skills/skillset';
import CharacterName from './personalization/characterName';

// this is the home page route for the site
// localhost:3000/GameOfLife

export default function Home() {
    return (
        <div>
            <CharacterName/>
            <section className="mainPageLayout">
                <div className="skillsetSummaryDuo">
                    <Summary primarySkillset="Management" secondarySkillset="Health"/>
                    <section className="summaryWrapper">
                        <Skillset skillsetName="Management"/>
                        <Skillset skillsetName="Health"/>
                    </section>
                </div>
                <div className="skillsetSummaryDuo">
                    <section className="summaryWrapper">
                        <Skillset skillsetName="Creativity"/>
                        <Skillset skillsetName="Social"/>
                    </section>
                    <section className="summaryWrapper">
                        <Skillset skillsetName="Scholarship"/>
                    </section>
                </div>
            </section>
        </div>

    );
}
