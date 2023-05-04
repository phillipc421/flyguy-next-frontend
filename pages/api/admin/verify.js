import { verify } from "jsonwebtoken";
import { readFile } from "fs/promises";
import path from "path";

const adminScopes = ["create:products", "edit:products"];
export default async function (req, res) {
  if (req.method === "POST") {
    const { accessToken } = req.body;
    const KEY = await readFile(
      path.join(process.cwd(), "dev-1j3h2j8tuhbti4lq.pem"),
      "utf-8"
    );
    const decoded = verify(accessToken, KEY);
    console.log("DECODED", decoded);
    const { permissions } = decoded;
    if (!permissions.length) return res.status(403).json({ authorized: false });
    for (let i = 0; i < permissions.length; i++) {
      if (!adminScopes.includes(permissions[i]))
        return res.status(403).json({ authorized: false });
    }
    return res.status(200).json({ authorized: true });
  }
}
