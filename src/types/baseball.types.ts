// Create a global for football types and interfaces
declare global {

    type BaseballFormation = Formation & {
        initialPlayersPositions: {
            pitcher?: { x: number; y: number };
            catcher?: { x: number; y: number };
            firstBase?: { x: number; y: number };
            secondBase?: { x: number; y: number };
            thirdBase?: { x: number; y: number };
            shortstop?: { x: number; y: number };
            leftField?: { x: number; y: number };
            centerField?: { x: number; y: number };
            rightField?: { x: number; y: number };
        };
    };
}
export { };


