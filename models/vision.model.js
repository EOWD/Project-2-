const { Schema, model } = require("mongoose");


const visionSchema = new Schema(
  {
    userId: {
      type: String,
      
      
    },
    image: {
      type: String,
      
      
    },
    response: {
      type: String,
      
    },
    
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`    
    timestamps: true
  }
);

const Vision = model("Vision", visionSchema);

module.exports = Vision;