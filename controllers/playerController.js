let playersDB = [
  {
    id: 1,
    name: "Player One",
    type: "LAG",
  },
  {
    id: 2,
    name: "Player Two",
    type: "NIT",
  },
  {
    id: 3,
    name: "Player Three",
    type: "TAG",
  },
];

// @desc   Get all players
// @route  GET /api/players
export const getPlayers = (req, res, next) => {
  res.status(200).json(playersDB);
};

// @desc   Edit player
// @route  PUT /api/players
export const editPlayer = (req, res, next) => {
  const playerId = Number(req.params.id);
  const playerNewName = req.body.name;
  const playerNewType = req.body.type;

  if (!playerNewName) {
    return res.status(404).json({
      message: "Did not provide player name",
    });
  }

  const foundPlayer = players.find(
    (player) => player.id === playerId
  );

  const foundPlayerId = foundPlayer.id - 1;

  if (foundPlayer) {
    foundPlayer.name = playerNewName;

    if (playerNewType) {
      foundPlayer.type = playerNewType;
    }

    playersDB[foundPlayerId] = foundPlayer;
  }

  res.status(200).json(playersDB[foundPlayerId]);
};

// // @desc    Get single post
// // @route   GET /api/players/:id
export const getPlayer = (req, res, next) => {
  const id = parseInt(req.params.id);
  const player = playersDB.find(
    (player) => player.id === id
  );

  if (!player) {
    const error = new Error(
      `A player with the id of ${id} was not found`
    );
    error.status = 404;
    return next(error);
  }

  res.status(200).json(player);
};

// // @desc    Create new post
// // @route   POST /api/players
export const createPlayer = (req, res, next) => {
  const playersName = req.body.name;
  const playersType = req.body.type;

  const playerExists = players.find(
    (player) => player.name === playersName
  );

  if (playerExists) {
    const error = new Error(
      `Player with this name already exists`
    );
    error.status = 400;
    return next(error);
  }

  const newPlayer = {
    id: playersDB.length + 1,
    name: playersName,
    type: playersType,
  };

  if (!newPlayer.name) {
    const error = new Error(
      `Please include a player Name`
    );
    error.status = 400;
    return next(error);
  }

  playersDB.push(newPlayer);

  res.redirect("/");
};

// // @desc    Delete post
// // @route   DELETE /api/players/:id
export const deletePlayer = (req, res, next) => {
  const playersId = parseInt(req.params.id);

  const foundPlayer = playersDB.find(
    (player) => player.id === playersId
  );

  if (!foundPlayer) {
    const error = new Error(
      `A player with the id of ${playersId} was not found`
    );
    error.status = 404;
    return next(error);
  }

  playersDB = playersDB.filter(
    (player) => player.id !== playersId
  );

  res.redirect("/");
};

export default playersDB;
