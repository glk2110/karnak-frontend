import React, { Fragment } from 'react';
import GameRow from './GameRow'

const GameContainer = () => {
  // TODO: This needs to be an api call
	const games = [<GameRow id="1" home_team="Columbia" away_team="Cornell1" />,<GameRow id="2" home_team="Columbia" away_team="Cornell2" />,<GameRow id="3" home_team="Columbia" away_team="Cornell3" />,<GameRow id="4" home_team="Columbia" away_team="Cornell4" />,<GameRow id="5" home_team="Columbia" away_team="Cornell5" />,<GameRow id="6" home_team="Columbia" away_team="Cornell6" />,<GameRow id="7" home_team="Columbia" away_team="Cornell7" />,<GameRow id="8" home_team="Columbia" away_team="Cornell8" />,<GameRow id="9" home_team="Columbia" away_team="Cornell9" />,<GameRow id="10" home_team="Columbia" away_team="Cornell10" />,<GameRow id="11" home_team="Columbia" away_team="Cornell11" />,<GameRow id="12" home_team="Columbia" away_team="Cornell12" />,<GameRow id="13" home_team="Columbia" away_team="Cornell13" />,<GameRow id="14" home_team="Columbia" away_team="Cornell14" />,<GameRow id="15" home_team="Columbia" away_team="Cornell15" />,]

    return (
        <Fragment>
          <div id="games">
            <h1>My Games</h1>
            {games}
          </div>
          <button id='upload_button'>
            ⨁ Add Game
          </button>
        </Fragment>
	);
}

export default GameContainer;
