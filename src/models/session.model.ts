import { User } from "./user.model";
import { getModelForClass, prop, Ref } from "@typegoose/typegoose";

export class Session {
  @prop({ ref: () => User })
  user: Ref<User>;

  @prop({ default: true })
  valid: boolean; //when user wants to logout we set valid to false
}

//different way of modeloptions
const SessionModel = getModelForClass(Session, {
    schemaOptions:{
        timestamps: true,
    },
});


export default SessionModel;