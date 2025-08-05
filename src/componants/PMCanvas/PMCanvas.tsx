import React, { useEffect, useRef, useState } from 'react'
import baseball_bg from '../../assets/sportsbackgrounds/baseball_bg.png'
import Lineuprandomizer from '../baseball/LineupRandomizer/Lineuprandomizer';
import { AbreviationsForFootballPositions, AmericanFootballOfensiveFormations, SupportedSports } from '../../utils/constants';
import FormationSelector from '../football/FormationSelector';
type Props = {}
const PMCanvas = (props: Props) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [selectedSport, setSelectedSport] = useState('none');

    const getContext = () => canvasRef.current?.getContext('2d');

    /**
     * Clears the canvas
     * @returns {void}
     */
    const clearCanvas = () => {

        const ctx = getContext();
        if (!ctx) return;
        const width = canvasRef?.current?.width ?? 0;
        const height = canvasRef?.current?.height ?? 0;
        ctx.clearRect(0, 0, width, height);
    }

    // Add baseball position to canvas
    const setupBaseballPosition = (position: string, x: number, y: number) => {
        const canvas = document.getElementById('pm-canvas') as HTMLCanvasElement;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        console.log('Adding position:', position, 'at', x, y);
        ctx.font = '16px Arial';
        ctx.fillStyle = 'blue';
        ctx.fillText(position, x, y);

    }
    /**
     * Sets up the baseball field on the canvas
     * @returns {void}
     */
    const setupBaseball = () => {
        const canvas = document.getElementById('pm-canvas') as HTMLCanvasElement;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;


        const img = new Image();
        img.src = baseball_bg; // Replace with your image path
        img.onload = () => {
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

            let positions = [
                { position: 'Pitcher', x: 125, y: 100 },
                { position: 'Catcher', x: 125, y: 150 },
                { position: 'First Base', x: 200, y: 75 },
                { position: 'Second Base', x: 175, y: 50 },
                { position: 'Third Base', x: 50, y: 75 },
                { position: 'Shortstop', x: 75, y: 50 },
                { position: 'Left Field', x: 25, y: 25 },
                { position: 'Center Field', x: 125, y: 20 },
                { position: 'Right Field', x: 200, y: 25 }
            ];
            positions.forEach(pos => {
                setupBaseballPosition(pos.position, pos.x, pos.y);
            });
        };


    }

    /**
     * Sets up the football field on the canvas
     * @param {FootballFormation} formation - The football formation to set up
     * @returns {Promise<void>}
     */
    const setupFootball = async (formation: FootballFormation) => {
        const canvas = document.getElementById('pm-canvas') as HTMLCanvasElement;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        ctx.fillStyle = '#f0f0f0'; // Placeholder color for football
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        // Here you would add the football field and player positions
        // For example, you could draw a football field and place players based on the FootballOfensiveFormations
        // This is a placeholder implementation

        let positions = formation.initialPlayersPositions;
        Object.keys(positions).forEach((key) => {
            const pos = positions[key];
            var canvas = document.getElementById('pm-canvas') as HTMLCanvasElement;
            var context = canvas.getContext('2d');
            let abbreviation = AbreviationsForFootballPositions[key as keyof typeof AbreviationsForFootballPositions] || key; // Use abbreviation if available
            var radius = 10;//(canvas.width - 2) / 2;
            if (context === null) return;
            context.beginPath();
            context.arc(pos.x, pos.y, radius, 0, 2 * Math.PI, false);
            context.fillStyle = '#eee';
            context.fill();
            context.strokeStyle = '#333';
            context.stroke();
            context.font = '8pt sans-serif';
            context.fillStyle = '#333';
            context.textBaseline = 'middle';
            context.textAlign = 'center';
            context.fillText(abbreviation, pos.x, pos.y);
        });
        ctx.font = '16px Arial';
        ctx.fillStyle = 'black';
        ctx.fillText('Football Field', 50, 20); // Placeholder text for football
    }

    /**
     * Handles the change event for the formation selection
     * @param formation - The selected football formation
     * @returns {void}
     */
    const handleFormationChange = (formation?: FootballFormation) => {
        if (!formation) return;
        setupFootball(formation); // This will redraw the football field with the selected formation
    }


    /**
     * Handles the change event for the sport selection dropdown
     * @param event - The change event
     * @returns {Promise<void>}
     */
    const onSelectChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedSport(event.target.value);
    }

    useEffect(() => {
        clearCanvas();
        if (selectedSport === 'baseball') setupBaseball();
        if (selectedSport === 'american_football') setupFootball(AmericanFootballOfensiveFormations[0]);
    }, [selectedSport]);

    return (
        <div>
            <div id="pm-controls">
                <select onChange={onSelectChange} id="pm-sport-select">
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
            <canvas
                ref={canvasRef}
                width={800}
                height={600}
                style={{ width: '100%', height: '100%', border: '1px solid black', backgroundColor: '#f0f0f0' }}
                id="pm-canvas"
            ></canvas>

        </div>
    )
}

export default PMCanvas