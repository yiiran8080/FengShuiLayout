import dbConnect from "@/lib/mongoose";
import User from "@/models/User";

export async function createUserIfNotExists(userId, email) {
	try {
		await dbConnect();

		// Check if user already exists
		const existingUser = await User.findOne({ userId });

		if (!existingUser) {
			// Create new user with default data
			const newUser = new User({
				userId: userId,
				email: email,
				gender: "female", // default
				birthDateTime: new Date(1996, 2, 12, 22), // default
				isLock: true, // user starts locked
				genStatus: "none", // default status
			});

			await newUser.save();
			console.log("New user created:", userId);
			return newUser;
		}

		return existingUser;
	} catch (error) {
		console.error("Error creating user:", error);
		throw error;
	}
}
