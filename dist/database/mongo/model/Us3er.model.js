// import mongoose, { SchemaTypeOptions } from 'mongoose';
// import { SchemaTypes, Document } from 'mongoose';
// import { Profile } from 'passport';
// export interface IUser extends Profile, Document {
//     id: string;
//     displayName: string;
//     name: {
//         familyName: string;
//         givenName: string;
//     };
//     emails: {
//         value: string;
//         verified: boolean;
//     }[];
//     photos: {
//         value: string;
//     }[];
//     provider: string;
// }
// const UserSchema = new Schema<IUser>({
//     displayName: { type: SchemaTypes.String, required: true },
//     emails: [
//         {
//             value: { type: SchemaTypes.String, required: true },
//             verified: { type: SchemaTypes.Boolean, required: true }
//         }
//     ],
// })
// export const UserModel = mongoose.model('User', UserSchema);
//# sourceMappingURL=Us3er.model.js.map