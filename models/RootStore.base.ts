/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { ObservableMap } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLStore, configureStoreMixin, QueryOptions, withTypedRefs } from "mst-gql"

import { PayloadModel, PayloadModelType } from "./PayloadModel"
import { payloadModelPrimitives, PayloadModelSelector } from "./PayloadModel.base"
import { FixedElementModel, FixedElementModelType } from "./FixedElementModel"
import { fixedElementModelPrimitives, FixedElementModelSelector } from "./FixedElementModel.base"
import { NumberElementModel, NumberElementModelType } from "./NumberElementModel"
import { numberElementModelPrimitives, NumberElementModelSelector } from "./NumberElementModel.base"



export type AvailableInput = {
  elementID: string
}
/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {

}


/**
* Enums for the names of base graphql actions
*/
export enum RootStoreBaseQueries {
queryAvailable="queryAvailable"
}


/**
* Store, managing, among others, all the objects received through graphQL
*/
export const RootStoreBase = withTypedRefs<Refs>()(MSTGQLStore
  .named("RootStore")
  .extend(configureStoreMixin([['Payload', () => PayloadModel], ['FixedElement', () => FixedElementModel], ['NumberElement', () => NumberElementModel]], [], "js"))
  .props({

  })
  .actions(self => ({
    queryAvailable(variables: { input?: AvailableInput }, resultSelector: string | ((qb: ElementModelSelector) => ElementModelSelector) = elementModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ available: ElementModelType[]}>(`query available($input: AvailableInput) { available(input: $input) {
        ${typeof resultSelector === "function" ? resultSelector(new ElementModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
  })))
