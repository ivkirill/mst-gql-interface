/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { QueryBuilder } from "mst-gql"
import { FixedElementModelSelector } from "./FixedElementModel.base"
import { NumberElementModelSelector } from "./NumberElementModel.base"
import { PayloadModel, PayloadModelType } from "./PayloadModel"
import { PayloadModelSelector } from "./PayloadModel.base"

export class ElementModelSelector extends QueryBuilder {
  payload(builder?: string | PayloadModelSelector | ((selector: PayloadModelSelector) => PayloadModelSelector)) { return this.__child(`payload`, PayloadModelSelector, builder) }
  fixedElement(builder?: string | FixedElementModelSelector | ((selector: FixedElementModelSelector) => FixedElementModelSelector)) { return this.__inlineFragment(`FixedElement`, FixedElementModelSelector, builder) }
  numberElement(builder?: string | NumberElementModelSelector | ((selector: NumberElementModelSelector) => NumberElementModelSelector)) { return this.__inlineFragment(`NumberElement`, NumberElementModelSelector, builder) }
}
export function selectFromElement() {
  return new ElementModelSelector()
}

export const elementModelPrimitives = selectFromElement()