let players = [
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
  console.log(
    `${req.method} ${req.protocol}://${req.get(
      "host"
    )}${req.originalUrl}`
  );

  res.render("index", { players });
};

// @desc   Edit player
// @route  PUT /api/players
export const editPlayer = (req, res, next) => {
  console.log(
    `${req.method} ${req.protocol}://${req.get(
      "host"
    )}${req.originalUrl}`
  );

  const foundPlayer = players.find(
    (player) =>
      player.id === Number(req.params.id)
  );

  if (foundPlayer) {
    const playerId = foundPlayer.id - 1;
    foundPlayer.name = req.body.name;
    players[playerId] = foundPlayer;
  }

  res.render("index", { players });
};

// // @desc    Get single post
// // @route   GET /api/players/:id
export const getPlayer = (req, res, next) => {
  console.log("WTF");
  const id = parseInt(req.params.id);
  const player = players.find(
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
// // @route   GET /api/players
export const createPlayerView = (
  req,
  res,
  next
) => {
  console.log(
    `${req.method} ${req.protocol}://${req.get(
      "host"
    )}${req.originalUrl}`
  );

  res.render("createPlayer");
};

// // @desc    Create new post
// // @route   POST /api/players
export const createPlayer = (req, res, next) => {
  console.log(
    `${req.method} ${req.protocol}://${req.get(
      "host"
    )}${req.originalUrl}`
  );

  const newPlayer = {
    id: players.length + 1,
    name: req.body.name,
    type: req.body.type,
  };

  if (!newPlayer.name) {
    const error = new Error(
      `Please include a player Name`
    );
    error.status = 400;
    return next(error);
  }

  players.push(newPlayer);

  res.render("index", { players });
};

// // @desc    Delete post
// // @route   DELETE /api/players/:id
export const deletePlayer = (req, res, next) => {
  console.log(req.params);
  console.log(req.body);
  const id = parseInt(req.params.id);
  const player = players.find(
    (player) => player.id === id
  );

  if (!player) {
    const error = new Error(
      `A player with the id of ${id} was not found`
    );
    error.status = 404;
    return next(error);
  }

  players = players.filter(
    (player) => player.id !== id
  );

  res.render("index", { players });
};
