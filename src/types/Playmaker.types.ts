// Create a global for football types and interfaces
declare global {
    interface Sport {
        id: number;
        name: string;
        description: string;
        isActive: boolean;
    }

    interface Formation {
        id: number;
        name: string;
        description: string;
        initialPlayersPositions: { [key: string]: { x: number; y: number } };
    }
}
export { };


