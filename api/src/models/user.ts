import { Schema, model } from 'mongoose';

interface user {
	fullname: string;
	username: string;
	email: string;
	password: string;
}

const userSchema = new Schema<user>({
	fullname: { type: String, required: true },
	username: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true }
});

const User = model<user>('users', userSchema);

export default User;