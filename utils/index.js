export const verifyJwt = async (req, res, sessionFunc) => {
  try {
    const { accessToken } = await sessionFunc(req, res);
    const verifyResponse = await fetch(
      "http://localhost:3001/api/admin/verify",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ accessToken }),
      }
    );
    if (verifyResponse.ok) return true;
    return false;
  } catch (e) {
    console.error("Error in Middleware", e);
    throw new Error(e);
  }
};
