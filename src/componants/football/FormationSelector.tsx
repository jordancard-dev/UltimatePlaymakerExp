import React from 'react'
import { AmericanFootballOfensiveFormations } from '../../utils/constants';

type Props = {
    onChangeFormation?: (formation?: FootballFormation) => void;
    onFormationSelected?: (formation: string) => void;
    selectedFormation?: string;
}

const FormationSelector = (props: Props) => {
    // Retrieve the list of American Football offensive formations
    const offensiveFormations = AmericanFootballOfensiveFormations;


    return (
        <div>
            <h2>Select Formation</h2>
            <select onChange={(e) => props.onChangeFormation?.(offensiveFormations?.find(f => f.name === e?.target?.value))} value={props.selectedFormation}>
                {offensiveFormations.map((formation, index) => (
                    <option key={index} value={formation.name}>
                        {formation.name}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default FormationSelector