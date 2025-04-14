const mongoose = require("mongoose");

const ReservationSchema = new mongoose.Schema({
  reservationDateTime: {
    type: Date,
    required: true, // วันที่และเวลาที่ลูกค้าจะมาร้าน
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User", // เชื่อมโยงกับ User (ลูกค้า)
    required: true,
  },
  restaurant: {
    type: mongoose.Schema.ObjectId,
    ref: "Restaurant", // เชื่อมโยงกับ Restaurant (ร้านอาหาร)
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "confirmed", "cancelled"],
    default: "pending", // สถานะของการจอง (ยังไม่ได้ยืนยัน, ยืนยันแล้ว, ยกเลิก)
  },
  createdAt: {
    type: Date,
    default: Date.now, // เวลาที่จองถูกสร้าง
  },

  // เชื่อมโยงกับ OrderBooking เพื่อเก็บเมนูที่ลูกค้าสั่ง
  orderItems: [
    {
      menuItem: {
        type: mongoose.Schema.ObjectId,
        ref: "MenuItem", // เมนูที่ลูกค้าสั่ง
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
        min: 1, // จำนวนที่ลูกค้าสั่ง
      },
      note: {
        type: String,
        default: "", // หมายเหตุเพิ่มเติม
      },
    },
  ],
});

module.exports = mongoose.model("Reservation", ReservationSchema);
