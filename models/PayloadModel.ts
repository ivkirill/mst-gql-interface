import { Instance } from "mobx-state-tree"
import { PayloadModelBase } from "./PayloadModel.base"

/* The TypeScript type of an instance of PayloadModel */
export interface PayloadModelType extends Instance<typeof PayloadModel.Type> {}

/* A graphql query fragment builders for PayloadModel */
export { selectFromPayload, payloadModelPrimitives, PayloadModelSelector } from "./PayloadModel.base"

/**
 * PayloadModel
 */
export const PayloadModel = PayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
