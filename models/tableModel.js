import mongoose from "mongoose";

const tableSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
     Noofperson: {
      type: Number,
      required: true,
    },
    date :{
      type : String,
      require : true,
    },
    time :{
      type : String,
      require : true,
    },
    tableno:{
      type: Number,
      required: true,
    },
    // status: {
    //   type: String,
    //   default: "Not Booked",
    //   enum: ["Not Booked", "Waiting", "Booked",],
    // },
  
   
  },
  { timestamps: true }
);

export default mongoose.model("tables", tableSchema);