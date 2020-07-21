/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PayloadBase
 * auto generated base class for the model PayloadModel.
 */
export const PayloadModelBase = ModelBase
  .named('Payload')
  .props({
    __typename: types.optional(types.literal("Payload"), "Payload"),
    value: types.identifier,
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PayloadModelSelector extends QueryBuilder {
  get value() { return this.__attr(`value`) }
}
export function selectFromPayload() {
  return new PayloadModelSelector()
}

export const payloadModelPrimitives = selectFromPayload().value
