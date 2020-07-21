import { Instance } from "mobx-state-tree"
import { NumberElementModelBase } from "./NumberElementModel.base"

/* The TypeScript type of an instance of NumberElementModel */
export interface NumberElementModelType extends Instance<typeof NumberElementModel.Type> {}

/* A graphql query fragment builders for NumberElementModel */
export { selectFromNumberElement, numberElementModelPrimitives, NumberElementModelSelector } from "./NumberElementModel.base"

/**
 * NumberElementModel
 */
export const NumberElementModel = NumberElementModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
