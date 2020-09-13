import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { body } = req;
  if (!body.test) {
    return res.status(200).json(body.test);
  }
  return res.status(400).json({ cool: "Is Not Cool" });
};
