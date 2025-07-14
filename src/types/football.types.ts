// Create a global for football types and interfaces
declare global {
    interface FootballFormation {
        id: number;
        name: string;
        description: string;
        initialPlayersPositions: { [key: string]: { x: number; y: number } };
    }
}
export { };


