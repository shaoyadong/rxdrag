import { IControllerMeta } from "@rxdrag/minions-runtime-react";
import { ILogicFlowDefinition } from "@rxdrag/minions-schema";
import { useCallback } from "react";

export function useExtractReferencedLogicFlowMetas() {
  const extract = useCallback((controllerMetas: IControllerMeta[]) => {
    const logicFlowMetas: ILogicFlowDefinition[] = []
    for (const ctrlMeta of controllerMetas) {
      logicFlowMetas.push(...ctrlMeta.reactions || [])
    }

    return logicFlowMetas
  }, [])

  return extract
}