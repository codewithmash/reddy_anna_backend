/**
 * Copyright 2023, the hatemragab project author.
 * All rights reserved. Use of this source code is governed by a
 * MIT license that can be found in the LICENSE file.
 */


import { IsEnum, IsMongoId, IsNotEmpty } from "class-validator";
import { MongoRoomIdDto } from "../../../core/common/dto/mongo.room.id.dto";
import { RoomTypingStatus } from "../../../core/utils/enums";


export class RoomStatusTypingDto extends MongoRoomIdDto {
  @IsEnum(RoomTypingStatus)
  status: string;

  toJson() {
    return {
      "roomId": this.roomId,
      "status":this.status,
      "name":this.myUser.fullName,
      "userId":this.myUser._id
    };
  }
}
