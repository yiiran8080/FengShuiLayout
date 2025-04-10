import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a name for this project'],
        maxlength: [100, 'Name cannot be more than 100 characters'],
    },
    description: {
        type: String,
        maxlength: [500, 'Description cannot be more than 500 characters'],
    },
    owner: {
        type: String,
        required: true,
        ref: 'User', // Reference to User model userId field
    },
    thumbnail: {
        type: String, // URL to the thumbnail image
    },
    isPublic: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    }
});

// Virtual properties for populating related rooms and furniture
ProjectSchema.virtual('rooms', {
    ref: 'Room',
    localField: '_id',
    foreignField: 'projectId',
});

ProjectSchema.virtual('furniture', {
    ref: 'Furniture',
    localField: '_id',
    foreignField: 'projectId',
});

// Set options to allow virtual properties to be included in JSON
ProjectSchema.set('toJSON', { virtuals: true });
ProjectSchema.set('toObject', { virtuals: true });

// Check if model is already defined (for hot-reloading in development)
export default mongoose.models.Project || mongoose.model('Project', ProjectSchema); 