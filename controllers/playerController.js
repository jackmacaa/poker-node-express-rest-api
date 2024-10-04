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
  //   const limit = parseInt(req.query.limit);

  //   if (!isNaN(limit) && limit > 0) {
  //     return res
  //       .status(200)
  //       .json(players.slice(0, limit));
  //   }

  //   res.status(200).json(players);
};

// // @desc    Get single post
// // @route   GET /api/players/:id
// export const getPost = (req, res, next) => {
//   const id = parseInt(req.params.id);
//   const post = players.find(
//     (post) => post.id === id
//   );

//   if (!post) {
//     const error = new Error(
//       `A post with the id of ${id} was not found`
//     );
//     error.status = 404;
//     return next(error);
//   }

//   res.status(200).json(post);
// };

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
  };

  console.log("creating", newPlayer);

  if (!newPlayer.name) {
    const error = new Error(
      `Please include a player Name`
    );
    error.status = 400;
    return next(error);
  }

  players.push(newPlayer);
  res.status(201).json(players);
};

// // @desc    Update post
// // @route   PUT /api/players/:id
// export const updatePost = (req, res, next) => {
//   const id = parseInt(req.params.id);
//   const post = players.find(
//     (post) => post.id === id
//   );

//   if (!post) {
//     const error = new Error(
//       `A post with the id of ${id} was not found`
//     );
//     error.status = 404;
//     return next(error);
//   }

//   post.title = req.body.title;
//   res.status(200).json(players);
// };

// // @desc    Delete post
// // @route   DELETE /api/players/:id
// export const deletePost = (req, res, next) => {
//   const id = parseInt(req.params.id);
//   const post = players.find(
//     (post) => post.id === id
//   );

//   if (!post) {
//     const error = new Error(
//       `A post with the id of ${id} was not found`
//     );
//     error.status = 404;
//     return next(error);
//   }

//   players = players.filter(
//     (post) => post.id !== id
//   );
//   res.status(200).json(players);
// };
