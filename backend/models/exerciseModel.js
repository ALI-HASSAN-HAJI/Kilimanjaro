import {model, Schema} from 'mongoose';

const exerciseSchema = new Schema({
  team: {
    type: String,
    required: true
  },
  playerName: {
    type: String,
    required: true
  },
  nationality: {
    type: String,
    required: true
  },
  goals: {
    type: Number,
    required: true
  },
  assist: {
    type: Number,
    required: true
  },

});
export default model("exerciseModel", exerciseSchema);