const { Schema, Types } = require('mongoose');

const userSchema = new Schema(
    {
        username: {
          type: String,
          required: true,
          unique: true,
          trim: true
        },
        email: {
          type: String,
          required: true,
          unique: true,
          validate: [validateEmail, 'Please provide a valid email address'],
          match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
        },
        thoughts: {
        },
        friends: {
        },
      },
      {
        toJSON: {
          getters: true,
        },
        id: false,
      }
    );
    
    module.exports = userSchema;