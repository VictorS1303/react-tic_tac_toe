import GameTile from './GameTile.jsx'
import GameStrikeThrough from './GameStrikeThrough.jsx'

function Board()
{
    return (
        <>
            <GameTile />
            <GameTile />
            <GameTile />
            <GameTile />
            <GameTile />
            <GameTile />
            <GameTile />
            <GameTile />
            <GameTile />
            <GameStrikeThrough />
        </>
    );
}

export default Board;