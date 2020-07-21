import { Instance } from "mobx-state-tree"
import { FixedElementModelBase } from "./FixedElementModel.base"

/* The TypeScript type of an instance of FixedElementModel */
export interface FixedElementModelType extends Instance<typeof FixedElementModel.Type> {}

/* A graphql query fragment builders for FixedElementModel */
export { selectFromFixedElement, fixedElementModelPrimitives, FixedElementModelSelector } from "./FixedElementModel.base"

/**
 * FixedElementModel
 */
export const FixedElementModel = FixedElementModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
