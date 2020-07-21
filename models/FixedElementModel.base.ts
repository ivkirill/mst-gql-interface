/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PayloadModel, PayloadModelType } from "./PayloadModel"
import { PayloadModelSelector } from "./PayloadModel.base"
import { RootStoreType } from "./index"


/**
 * FixedElementBase
 * auto generated base class for the model FixedElementModel.
 */
export const FixedElementModelBase = ModelBase
  .named('FixedElement')
  .props({
    __typename: types.optional(types.literal("FixedElement"), "FixedElement"),
    payload: types.union(types.undefined, types.late((): any => PayloadModel)),
    value: types.union(types.undefined, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class FixedElementModelSelector extends QueryBuilder {
  get value() { return this.__attr(`value`) }
  payload(builder?: string | PayloadModelSelector | ((selector: PayloadModelSelector) => PayloadModelSelector)) { return this.__child(`payload`, PayloadModelSelector, builder) }
}
export function selectFromFixedElement() {
  return new FixedElementModelSelector()
}

export const fixedElementModelPrimitives = selectFromFixedElement().value
