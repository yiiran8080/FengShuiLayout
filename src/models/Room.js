import mongoose from 'mongoose';
import { ROOM_TYPES } from '@/types/room';

// Convert the ROOM_TYPES object values to an array for enum validation
const roomTypeValues = Object.values(ROOM_TYPES);

const RoomSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a name for this room'],
        maxlength: [60, 'Name cannot be more than 60 characters'],
    },
    type: {
        type: String,
        enum: roomTypeValues,
        required: [true, 'Please specify the type of room'],
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
    owner: {
        type: String,
        required: true,
    },
    projectId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project',
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
export default mongoose.models.Room || mongoose.model('Room', RoomSchema); 