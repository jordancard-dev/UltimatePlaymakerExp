import React, { useEffect, useRef, useState } from 'react'
import baseball_bg from '../../assets/sportsbackgrounds/baseball_bg.png'
import Lineuprandomizer from '../baseball/LineupRandomizer/Lineuprandomizer';
import { AbreviationsForFootballPositions, AmericanFootballOfensiveFormations, BaseballOfensiveFormations, SupportedSports } from '../../utils/constants';
import FormationSelector from '../football/FormationSelector';
import { Stage, Layer, Image as KonvaImage, Circle, Text } from 'react-konva';
import useImage from 'use-image';
type Props = {}
const PMCanvas = (props: Props) => {
    const [selectedSport, setSelectedSport] = useState('none');
    const [formation, setFormation] = useState<FootballFormation | null>(null);

    const CanvasImage = ({ src, width, height }: { src: string, width: number, height: number }) => {
        const [image] = useImage(src);
        return <KonvaImage image={image} width={width} height={height} />;
    };

    const SetPlayersPosition = (formation: FootballFormation) => {
        return Object.entries(formation.initialPlayersPositions).map(
            ([key, pos], idx) => {
                const label =
                    AbreviationsForFootballPositions[key as keyof typeof AbreviationsForFootballPositions] || key;
                return (
                    <React.Fragment key={idx}>
                        <Circle x={pos.x} y={pos.y} radius={12} fill="#eee" stroke="#333" />
                        <Text
                            text={label}
                            x={pos.x}
                            y={pos.y}
                            offsetX={10}
                            offsetY={7}
                            fontSize={10}
                            fill="#333"
                        />
                    </React.Fragment>
                );
            }
        );
    }

    /**
     * Handles the change event for the formation selection
     * @param formation - The selected football formation
     * @returns {void}
     */
    const handleFormationChange = (formation?: FootballFormation) => {
        if (!formation) return;
        setFormation(formation);
    }


    /**
     * Handles the change event for the sport selection dropdown
     * @param event - The change event
     * @returns {Promise<void>}
     */
    const onSelectChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
        setFormation(null); // Reset formation when sport changes
        setSelectedSport(event.target.value);
    }

    return (
        <div id="pm-canvas-root">
            <div id="pm-controls">
                <select id="pm-sport-select" data-cy="sport-select" onChange={onSelectChange}>
                    <option value="none">None</option>
                    {SupportedSports.map((sport) => (
                        <option key={sport.id} value={sport.name.toLowerCase().replaceAll(' ', '_')}>{sport.name}</option>
                    ))}
                </select>
                {selectedSport === 'baseball' && (
                    <Lineuprandomizer />
                )}
                {selectedSport === 'american_football' && (
                    <FormationSelector onChangeFormation={handleFormationChange} />
                )}
            </div>
            <Stage width={800} height={600}>
                <Layer>
                    {/* Background Image */}
                    {selectedSport === 'baseball' && <CanvasImage src={baseball_bg} width={800} height={600} />}

                    {/* Players */}
                    {selectedSport === 'american_football' && SetPlayersPosition(formation || AmericanFootballOfensiveFormations[0])}
                    {selectedSport === 'baseball' && SetPlayersPosition(formation || BaseballOfensiveFormations[0])}

                </Layer>
            </Stage>
        </div >
    )
}

export default PMCanvas