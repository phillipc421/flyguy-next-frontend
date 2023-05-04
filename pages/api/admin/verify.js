import { verify } from "jsonwebtoken";
const KEY = `-----BEGIN CERTIFICATE-----
MIIDHTCCAgWgAwIBAgIJa8FiGA7a6L2ZMA0GCSqGSIb3DQEBCwUAMCwxKjAoBgNV
BAMTIWRldi0xajNoMmo4dHVoYnRpNGxxLnVzLmF1dGgwLmNvbTAeFw0yMzA0Mjcx
OTIyNTFaFw0zNzAxMDMxOTIyNTFaMCwxKjAoBgNVBAMTIWRldi0xajNoMmo4dHVo
YnRpNGxxLnVzLmF1dGgwLmNvbTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoC
ggEBAL+LRlYaMikkoe0qDng3D3Eoo2vpWHnBOAejv7RU8Ifl1L2lKAkAsWIJ7qe4
yGo+sPco7hmCDMgJlGaVPNpZOW7beRm16Vy/DuAbrqUT2Hzr/d37pGdeYBJsKSWy
wQkTxMXWguJjQGm1lT7VpCOxJXyjt++4Bc7bFo6i9DDtqdC28UncITVEjzpj+6eE
RHuy0Sd6DlSxFMoqT/BSTv/ooakd7gz5HcfK/3nRGUmy7WNBq6r+R6n4rsoGkUVR
M/AToGf9oKKWS6eyXy+vgc+imtNJHDejxwamraZbcsKXf8YUyq3HOjFWBRIR5HEw
pWcwoUAi36JrXqNrdLAdJNZCtl8CAwEAAaNCMEAwDwYDVR0TAQH/BAUwAwEB/zAd
BgNVHQ4EFgQUme1tmly4oIvEzBz/VkdXl08a9hYwDgYDVR0PAQH/BAQDAgKEMA0G
CSqGSIb3DQEBCwUAA4IBAQCnhTmDL0rA1N02bgbRANLd4PZkDW3uP+pgtsZ6WAnu
pdMEizxCVG/oaG9EUoMuWtzl+5WnRTQe4wCQ7I5tYBwgxklr4RQaqJjfyZOYceVT
kTd9AJhKEAguyj4ddQDuYwvOVNSlmnMtAy9Z2omYo7Vard57Iv0BXuZ37ol08Rxp
TGdfOeoWuY/rENLVctP0/+Lo7YID688+Vgt6rfIIahDMRhZNMhPlFjObnFmyWNMc
s+Dd1T3yLkDcQyA5z8sCGbAPSza8X0X7MQQidCsBCSu9HKpQJmazFk1BPaLGOUIC
0BGZjJHiSND8Yt7M2BNxAB84iPPU14ywITYA6n2rNxBe
-----END CERTIFICATE-----`;

const adminScopes = ["create:products", "edit:products"];
export default async function (req, res) {
  if (req.method === "POST") {
    const { accessToken } = req.body;
    const decoded = verify(accessToken, KEY);
    const { permissions } = decoded;
    if (!permissions.length) return res.status(403).json({ authorized: false });
    for (let i = 0; i < permissions.length; i++) {
      if (!adminScopes.includes(permissions[i]))
        return res.status(403).json({ authorized: false });
    }
    return res.status(200).json({ authorized: true });
  }
}
