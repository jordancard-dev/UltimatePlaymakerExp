import React, { useState } from 'react'
import baseball_bg from '../../assets/sportsbackgrounds/baseball_bg.png'
import Lineuprandomizer from '../baseball/LineupRandomizer/Lineuprandomizer';
import { AbreviationsForFootballPositions, FootballOfensiveFormations } from '../../utils/constants';
type Props = {}
const PMCanvas = (props: Props) => {
    const [circlePosition, setCirclePosition] = useState({ x: 50, y: 70 });
    // use State to manage x and y coordinates of the circle
    // const [circlePosition, setCirclePosition] = useState({ x: 50, y: 70 });

    // Add image to canvas
    const addImageToCanvas = () => {
        const canvas = document.getElementById('pm-canvas') as HTMLCanvasElement;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        const img = new Image();
        img.src = baseball_bg; // Replace with your image path
        img.onload = () => {
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        };

    }

    //Add Circle to canvas at position (x, y)
    const addCircleToCanvas = (x: number, y: number) => {
        const canvas = document.getElementById('pm-canvas') as HTMLCanvasElement;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(circlePosition.x, circlePosition.y, 10, 0, Math.PI * 2);
        ctx.fillStyle = 'red';
        ctx.fill();
        ctx.closePath();
    }


    // Add editableText to canvas
    const addEditableTextToCanvas = (text: string, x: number, y: number) => {
        const canvas = document.getElementById('pm-canvas') as HTMLCanvasElement;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        ctx.font = '16px Arial';
        ctx.fillStyle = 'yellow';
        ctx.fillText(text, x, y);
    }

    // Clear canvas
    const clearCanvas = () => {
        const canvas = document.getElementById('pm-canvas') as HTMLCanvasElement;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    // Add draggable functionality to canvas
    const makeCanvasDraggable = () => {


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

    const setupFootball = () => {
        const canvas = document.getElementById('pm-canvas') as HTMLCanvasElement;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        ctx.fillStyle = '#f0f0f0'; // Placeholder color for football
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        // Here you would add the football field and player positions
        // For example, you could draw a football field and place players based on the FootballOfensiveFormations
        // This is a placeholder implementation

        let positiions = FootballOfensiveFormations[0].initialPlayersPositions;
        Object.keys(positiions).forEach((key) => {
            const pos = positiions[key];
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

    const onSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedSport = event.target.value;
        const canvas = document.getElementById('pm-canvas') as HTMLCanvasElement;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas before adding new background
        switch (selectedSport) {
            case 'baseball':
                setupBaseball(); // Example position
                break;
            case 'basketball':
                // Add basketball background logic here
                ctx.fillStyle = '#f0f0f0'; // Placeholder color for basketball
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                break;
            case 'football':
                setupFootball(); // Setup football field and positions
                break;
            default:
                ctx.fillStyle = '#f0f0f0'; // Default background color
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                break;
        }
    }

    return (
        <div>

            {/* TODO: Make a type for the sport options */}
            {/* TODO: Make into its own component */}
            <select onChange={onSelectChange} id="pm-sport-select">
                <option value="none">None</option>
                <option value="baseball">Baseball</option>
                <option value="basketball">Basketball</option>
                <option value="football">Football</option>
            </select>

            <canvas
                style={{
                    width: '100%',
                    height: '100%',
                    border: '1px solid black',
                    backgroundColor: '#f0f0f0'
                }}
                id="pm-canvas"
            ></canvas>
            <Lineuprandomizer />
            <div id="pm-controls">
                <button id="pm-add-text" onClick={() => addEditableTextToCanvas('Hello World', 50, 25)}>Add Text</button>
                <button id="pm-add-image" onClick={addImageToCanvas}>Add Image</button>
                x: <input type="number" value={circlePosition.x} onChange={(e) => setCirclePosition({ ...circlePosition, x: parseInt(e.target.value) })} />
                y: <input type="number" value={circlePosition.y} onChange={(e) => setCirclePosition({ ...circlePosition, y: parseInt(e.target.value) })} />
                <br />
                <button id="pm-add-circle" onClick={() => addCircleToCanvas(50, 70)}>Add Circle </button>
                <button id="pm-clear" onClick={() => clearCanvas}>Clear</button>
            </div>
        </div>
    )
}

export default PMCanvas