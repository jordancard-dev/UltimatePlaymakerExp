import React, { useState } from 'react'
import baseball_bg from '../../assets/sportsbackgrounds/baseball_bg.png'
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


    return (
        <div>PMCanvas

            <canvas
                style={{
                    width: '100%',
                    height: '100%',
                    border: '1px solid black',
                    backgroundColor: '#f0f0f0'
                }}
                id="pm-canvas"
            ></canvas>
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