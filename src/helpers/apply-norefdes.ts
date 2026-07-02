import type { AnyCircuitElement } from "circuit-json"

export const applyNoRefDes = (
  elements: AnyCircuitElement[],
  parameters: any,
): AnyCircuitElement[] => {
  if (!parameters.norefdes) return elements
  return elements.filter(
    (el) =>
      !(
        el.type === "pcb_silkscreen_text" &&
        /\{(REF|NAME|REFERENCE)\}/i.test((el as any).text ?? "")
      ),
  )
}
