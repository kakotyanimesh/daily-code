"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkModel = exports.ContentModel = exports.TagsModel = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const tagsSchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        required: true
    }
});
// restriction of content type to a specific string by using type
const contentTypesArray = ['image', 'video', 'tweet', 'article']; // with as const the its only readOnly (ts wont change the type)
const contentSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: contentTypesArray
    },
    tags: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Tag'
    },
    userId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
});
const TagsModel = mongoose_1.default.model('Tag', tagsSchema);
exports.TagsModel = TagsModel;
const ContentModel = mongoose_1.default.model('Content', contentSchema);
exports.ContentModel = ContentModel;
const linkSchema = new mongoose_1.Schema({
    hash: { type: String, required: true },
    userId: { type: mongoose_1.Types.ObjectId, ref: 'User', required: true }
});
const LinkModel = mongoose_1.default.model('Link', linkSchema);
exports.LinkModel = LinkModel;
