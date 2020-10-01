const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

app.use(/^(?!\/api\/).+\..+$/, (req, res, next) =>
  express.static(path.join(__dirname, "dist"), { fallthrough: false })(
    { ...req, path: req.baseUrl, url: req.baseUrl },
    res,
    next
  )
);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/index.html"));
});

app.listen(port, () => console.log(`Listen on port ${port}`));
