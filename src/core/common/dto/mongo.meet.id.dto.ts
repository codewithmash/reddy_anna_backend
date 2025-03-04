/**
 * Copyright 2023, the hatemragab project author.
 * All rights reserved. Use of this source code is governed by a
 * MIT license that can be found in the LICENSE file.
 */

import CommonDto from "./common.dto";
import { IsMongoId } from "class-validator";

export  class MongoMeetIdDto extends CommonDto {
  @IsMongoId()
  meetId: string;
}