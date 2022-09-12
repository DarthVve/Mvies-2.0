import { Schema, model } from 'mongoose';

const userSchema = new Schema({
	fullname: { type: String, required: true },
	username: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true }
});

const User = model('users', userSchema);

export default User;