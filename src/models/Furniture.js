import mongoose from 'mongoose';
import { FURNITURE_TYPES } from '@/types/room';

// Convert the FURNITURE_TYPES object values to an array for enum validation
const furnitureTypeValues = Object.values(FURNITURE_TYPES);

const FurnitureSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a name for this furniture'],
        maxlength: [60, 'Name cannot be more than 60 characters'],
    },
    type: {
        type: String,
        enum: furnitureTypeValues,
        required: [true, 'Please specify the type of furniture'],
    },
    position: {
        x: {
            type: Number,
            required: true,
        },
        y: {
            type: Number,
            required: true,
        },
    },
    size: {
        width: {
            type: Number,
            required: true,
        },
        height: {
            type: Number,
            required: true,
        },
    },
    roomId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Room',
    },
    projectId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project',
    },
    owner: {
        type: String,
        required: true,
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

// Check if model is already defined (for hot-reloading in development)
export default mongoose.models.Furniture || mongoose.model('Furniture', FurnitureSchema); 