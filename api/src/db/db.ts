import mongoose from 'mongoose';

const uri = process.env.MONGODB_URI as string;

export async function DB() {
	try {
		const cluster = await mongoose.connect(uri);
		console.log(`MongoDB Cluster running on ${cluster.connection.port}`)
	} catch (err) {
		console.log(err);
	}
};