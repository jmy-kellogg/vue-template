import express, { type Request, type Response } from "express";

export const app = express();

export interface Thumbnail {
  alt_text: string;
  height: number;
  lqip: string;
  width: number;
}
export interface Artwork {
  id: number;
  title: string;
  artist_title: string;
  image_id: string;
  exhibition_history: string;
  thumbnail: Thumbnail | null;
}

export type Artworks = Artwork[];

app.get("/api/artworks", async (_req: Request, res: Response) => {
  try {
    const resp = await fetch(
      "https://api.artic.edu/api/v1/artworks/search?sort=_score&sort_order=desc&limit=25"
    );
    const respJson = await resp.json();
    const searchData: Artworks = respJson.data || [];

    const idQuery = searchData.map(({ id }) => id).join(",");
    const detailsResp = await fetch(
      `https://api.artic.edu/api/v1/artworks?ids=${idQuery}`
    );
    const detailsData = await detailsResp.json();
    const data = detailsData.data || [];

    return res.status(200).send(data);
  } catch (err) {
    return res.status(400).send({ error: err });
  }
});

app.get("/api/artworks/search", async (req: Request, res: Response) => {
  try {
    const keywords = req.query.keywords;
    let data = [];

    if (keywords) {
      const resp = await fetch(
        `https://api.artic.edu/api/v1/artworks/search?q=${keywords}&limit=25`
      );
      const respJson = await resp.json();
      const respData: Artworks = respJson.data || [];

      const idQuery = respData.map(({ id }) => id).join(",");
      const detailsResp = await fetch(
        `https://api.artic.edu/api/v1/artworks?ids=${idQuery}`
      );
      const detailsData = await detailsResp.json();
      data = detailsData.data || [];
    }

    return res.status(200).send(data);
  } catch (err) {
    return res.status(400).send({ error: err });
  }
});

app.get("/api/artworks/:id", async (req: Request, res: Response) => {
  try {
    const resp = await fetch(
      `https://api.artic.edu/api/v1/artworks/${req.params.id}`
    );
    const respData = await resp.json();
    const data: Artwork = respData.data || {};

    return res.status(200).send(data);
  } catch (err) {
    return res.status(400).send({ error: err });
  }
});
