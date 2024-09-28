import express from "express";
import cors from "cors";
import pg from "pg";
import dotenv from "dotenv";
import dateFormat from "dateformat";

const app = express();
app.use(cors());
app.use(express.json());

dotenv.config();

const db = new pg.Pool({
  connectionString: process.env.DB_URL,
});

app.get("/", (req, res) => {
  try {
    res.status(200).send({ message: "you are looking at my root route how roude!" });
  } catch (error) {
    res.json(`${error.name}: ${error.message}`);
  }
});

app.get("/games", async (req, res) => {
  try {
    if (req.query.include_genres && !req.query.id) {
      const result = await db.query(`
        SELECT games.title, games.studio, games.platforms, games.released, array_agg(genres.name) AS genres
        FROM games
        INNER JOIN game_genres ON games.id = game_genres.games_id
        INNER JOIN genres ON game_genres.genres_id = genres.id
        GROUP BY games.title, games.studio, games.platforms, games.released;
      `);

      const games = result.rows;
      res.status(200).json(games);
      return;
    }
    if (req.query.include_genres && req.query.id) {
      console.log(req.query.id);
      const game = (
        await db.query(
          `
          SELECT games.*, array_agg(genres.name) AS genres
          FROM games
          FULL JOIN game_genres ON games.id = game_genres.games_id
          FULL JOIN genres ON game_genres.genres_id = genres.id
          WHERE games.id = $1
          GROUP BY games.id
          `,
          [req.query.id]
        )
      ).rows[0];

      console.log(game);
      res.status(200).json(game);
      return;
    }
    const games = (await db.query("SELECT * FROM games")).rows;
    console.log(games);
    res.status(200).json(games);
  } catch (e) {
    res.status(500).json(`${e.name}: ${e.message}`);
  }
});

app.post("/TalkToUs", async (req, res) => {
  const { title, studio, platforms, released, img_url } = req.body;
  try {
    const result = await db.query(
      `
      INSERT INTO games (title, studio, platforms, released, img_url)
      VALUES ($1, $2, $3, $4, $5)
      `,
      [title, studio, platforms, released, img_url]
    );

    res.status(200).json({ success: result });
  } catch (error) {
    res.status(500).json(`${error.name}: ${error.message}`);
  }
});


app.listen(3000, () => console.log(`Listening on port: 3000`))