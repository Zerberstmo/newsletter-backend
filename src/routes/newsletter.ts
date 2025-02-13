import { Hono } from "hono";
import { Newsletter } from "../models/newsletter";

export const newsletter = new Hono();

newsletter.get("/", async (c) => {
  const newsletter = await Newsletter.findAll();
  return c.json(
    {
      data: newsletter,
    },
    200
  );
});
newsletter.get("/:id", async (c) => {
  const { id } = c.req.param();

  try {
    const subscribers = await Newsletter.findById(id);
    return c.json(
      {
        data: newsletter,
      },
      200
    );
  } catch (error) {}
});
newsletter.post("/update/:id", async (c) => {});
