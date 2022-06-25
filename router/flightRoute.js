const router = require("express").Router();

const controller = require("../controller/flightController");

router
  .get("/", controller.getBookings)
  .get("/:id", controller.getBooking)
  .post("/", controller.createBooking)
  .put("/:id", controller.updateBooking)
  .delete("/:id", controller.deleteBooking);

module.exports = router;
