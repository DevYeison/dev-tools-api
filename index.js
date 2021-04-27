"use strict";

const express = require("express");
require("express-async-errors");
const compression = require("compression");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const mongoose = require("mongoose");

const { PORT, MONGO_URI } = require("./src/config");
const {
  NotFoundMiddleware,
  ErrorMiddleware,
  CacheMiddleware,
} = require("./src/middlewares");
const { ResourcesController } = require("./src/controllers");

const app = express();
const apiRoutes = express.Router();
const router = express.Router();

apiRoutes
  .use(cors())
  .use(morgan("dev"))
  .use(helmet())
  .use(express.json())
  .use(compression());

apiRoutes.get("/", (req, res) => {
  res.send("Hello World!");
});

apiRoutes.get("/resource/:resourceId", ResourcesController.getResourceById);
apiRoutes.get(
  "/resource/name/:resourceName",
  ResourcesController.getResourceByName
);
apiRoutes.get(
  "/resource",
  CacheMiddleware(20000),
  ResourcesController.getAllResources
);
apiRoutes.post("/resource", ResourcesController.createResource);
apiRoutes.patch("/resource/:resourceId", ResourcesController.updateResource);
apiRoutes.delete("/resource/:resourceId", ResourcesController.deleteResource);

router.use("/1/api", apiRoutes);
router.use(NotFoundMiddleware);
router.use(ErrorMiddleware);

app.use(router);

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(
    console.log("Database connected succesfull"),
    app.listen(PORT, () => {
      console.log(`listening on port: ${PORT}`);
    })
  )
  .catch((error) => console.log(`Connection error: ${error}`));
