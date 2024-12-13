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
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'thought',
            },
          ],
        },
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'user',
            }
          ],
        },
        {
          toJSON: {
            virtuals: true,
        },
        id: false,
      }
    );

    userSchema
      .virtual('friendCount')
      .get(function () {
        return len;
      })
      .set(function (v) {
        const friendCount
      })
    
    const User = model('user', userSchema);
    module.exports = User;