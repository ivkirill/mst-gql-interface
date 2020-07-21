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
 * NumberElementBase
 * auto generated base class for the model NumberElementModel.
 */
export const NumberElementModelBase = ModelBase
  .named('NumberElement')
  .props({
    __typename: types.optional(types.literal("NumberElement"), "NumberElement"),
    payload: types.union(types.undefined, types.late((): any => PayloadModel)),
    amount: types.union(types.undefined, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class NumberElementModelSelector extends QueryBuilder {
  get amount() { return this.__attr(`amount`) }
  payload(builder?: string | PayloadModelSelector | ((selector: PayloadModelSelector) => PayloadModelSelector)) { return this.__child(`payload`, PayloadModelSelector, builder) }
}
export function selectFromNumberElement() {
  return new NumberElementModelSelector()
}

export const numberElementModelPrimitives = selectFromNumberElement().amount
