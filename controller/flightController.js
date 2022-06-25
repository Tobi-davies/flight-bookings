const { FlightBookings } = require("../model/Flight");
const { v4: uuid } = require("uuid");

//get all bookings
exports.getBookings = async (req, res) => {
  try {
    const bookings = FlightBookings;
    res.status(200).json({
      message: "All bookings",
      bookings: bookings,
    });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

// get single booking
exports.getBooking = async (req, res) => {
  try {
    let id = req.params.id;
    const booking = FlightBookings.find((booking) => booking.id === id);
    res.status(200).json({
      message: "Booking found",
      booking: booking,
    });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

//create new booking
exports.createBooking = async (req, res) => {
  try {
    const { time, title, price, date } = await req.body;
    const newBooking = {
      id: uuid(),
      title,
      time,
      price,
      date,
    };

    FlightBookings.push(newBooking);

    res.status(201).json({
      message: "Booking  created",
      newBooking,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//update/edit booking
exports.updateBooking = async (req, res) => {
  try {
    let id = req.params.id;
    const booking = FlightBookings.find((booking) => booking.id === id);

    const { title, time, price, date } = await req.body;

    booking.title = title;
    booking.time = time;
    booking.price = price;
    booking.date = date;
    res.status(200).json({
      message: "Booking updated",
      booking,
    });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

//delete booking
exports.deleteBooking = async (req, res) => {
  try {
    let id = req.params.id;
    const booking = FlightBookings.filter((booking) => booking.id !== id);
    FlightBookings.splice(FlightBookings.indexOf(booking), 1);

    res.status(200).json({
      message: "User deleted",
      booking,
    });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

//default
// {
//   title: "flight to canada",
//   time: 1pm,
//   price: 26000,
//   date: "26-06-2022"
// }
