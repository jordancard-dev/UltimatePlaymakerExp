import React from 'react'

type Props = {}
interface Player {
    name: string;
    position: string;
}
const Lineuprandomizer = (props: Props) => {
    const [lineup, setLineup] = React.useState<Player[]>([]);
    // This component will be used to randomize a baseball lineup
    // It will take a list of players and return a random lineup

    const players = [
        { name: 'Player 1', position: 'P' },
        { name: 'Player 2', position: 'C' },
        { name: 'Player 3', position: '1B' },
        { name: 'Player 4', position: '2B' },
        { name: 'Player 5', position: '3B' },
        { name: 'Player 6', position: 'SS' },
        { name: 'Player 7', position: 'LF' },
        { name: 'Player 8', position: 'CF' },
        { name: 'Player 9', position: 'RF' }
    ];

    const getRandomLineup = () => {
        const shuffled = players.sort(() => 0.5 - Math.random());
        // Sort by position to ensure the lineup is valid
        setLineup(shuffled.slice(0, 9));
    };

    // This function can be used to get the current lineup
    // For now, it will just return the current state
    const getCurrentLineup = () => {
        return lineup;
    };

    return (
        <div>
            <p>Randomize your baseball lineup!</p>
            <button onClick={getRandomLineup}>Get Random Lineup</button>
            <ul>
                {lineup.map((player, index) => (
                    <li key={index}>
                        {player.position}: {player.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Lineuprandomizer