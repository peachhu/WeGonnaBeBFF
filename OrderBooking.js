const mongoose = require("mongoose");

const OrderBookingSchema = new mongoose.Schema({
  reservation: {
    type: mongoose.Schema.ObjectId,
    ref: "Reservation", // เชื่อมโยงกับ Reservation
    required: true,
  },
  checkInStatus: {
    type: Boolean,
    default: false, // ยังไม่เช็คอิน
  },
  checkInTime: {
    type: Date,
    default: null, // เวลาเช็คอินจริง
  },
  totalPrice: {
    type: Number,
    required: true, //ราคารวม
    min: 0,
  },
  phoneNumber: {
    type: String,
    required: true,
    match: /^[0-9]{9,15}$/, // ตรวจสอบเบอร์โทร
  },
  status: {
    type: String,
    enum: ["booked", "confirmed", "checked-in", "preparing", "completed", "no-show", "cancelled"],
    default: "booked", // สถานะของการจอง
  },
  createdAt: {
    type: Date,
    default: Date.now, // เวลาที่การจองถูกสร้าง
  },
});

module.exports = mongoose.model("OrderBooking", OrderBookingSchema);

//

