/**
 * Copyright 2023, the hatemragab project author.
 * All rights reserved. Use of this source code is governed by a
 * MIT license that can be found in the LICENSE file.
 */

import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {FilterQuery, PaginateModel, QueryOptions, UpdateQuery} from "mongoose";
import {IVersion} from "./versions.entity";
import {BaseService} from "../../core/common/base.service";

@Injectable()
export class VersionsService extends BaseService<IVersion> {
    constructor(
        @InjectModel("versions") private readonly model: PaginateModel<IVersion>,
    ) {
        super()
    }

    create(obj: Partial<IVersion>, session?): Promise<any> {
        return Promise.resolve(this.model.create([obj], {session}));
    }

    deleteMany(filter: FilterQuery<IVersion>): Promise<any> {
        return Promise.resolve(this.model.deleteMany(filter));
    }

    deleteOne(filter: FilterQuery<IVersion>): Promise<any> {
        return Promise.resolve(this.model.deleteOne(filter));
    }

    findAll(
        filter?: FilterQuery<IVersion> | undefined,
        select?: string | null | undefined,
        options?: QueryOptions<IVersion> | null | undefined,
    ) {
        return Promise.resolve(this.model.find(filter, select, options));
    }

    findById(
        id: string,
        select?: string,
    ): Promise<IVersion | null> {
        return Promise.resolve(this.model.findById(id, select));
    }

    findByIdAndDelete(id: string): Promise<any> {
        return Promise.resolve(this.model.findByIdAndDelete(id));
    }

    findByIdAndUpdate(
        id: string,
        update: UpdateQuery<IVersion>,
    ): Promise<any> {
        return Promise.resolve(this.model.findByIdAndUpdate(id, update));
    }

    updateMany(
        filter: FilterQuery<IVersion>,
        update: UpdateQuery<IVersion>,
        options?: QueryOptions<IVersion> | null | undefined,
    ): Promise<any> {
        return Promise.resolve(this.model.updateMany(filter, update, options));
    }

    async findByIdOrThrow(
        id: string,
        select?: string | null | undefined,
    ): Promise<IVersion> {
        let m = await this.findById(id, select);
        if (!m)
            throw new NotFoundException(
                'country with id ' + id + ' not found in db',
            );
        return m;
    }

    findOne(
        filter: FilterQuery<IVersion>,
        select?: string,
        options?: QueryOptions<IVersion>,
    ): Promise<IVersion | null> {
        return Promise.resolve(this.model.findOne(filter, select,options));
    }

    createMany(obj: Array<Partial<IVersion>>, session): Promise<any> {
        return Promise.resolve(this.model.create(obj, {session}));
    }

    findOneAndUpdate(
        filter: FilterQuery<IVersion>,
        update: UpdateQuery<IVersion>,
        session?,
        options?: QueryOptions<IVersion>,
    ): Promise<IVersion | null> {
        return Promise.resolve(
            this.model.findOneAndUpdate(filter, update, options).session(session),
        );
    }

    findCount(filter: FilterQuery<IVersion>, session?): Promise<any> {
        return Promise.resolve(this.model.estimatedDocumentCount(filter).session(session),);
    }
}
