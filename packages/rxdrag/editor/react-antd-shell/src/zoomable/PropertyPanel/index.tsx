import { memo, useCallback, useEffect, useState } from "react"
import styled from "styled-components"
import { ResizableColumn, SettingsForm } from "../../common"
import { usePropertyWidthState } from "../contexts"
import { floatShadow } from "../../utils"
import { Button } from "antd"
import { DEFAULT_MARGIN, MINI_WIDGET_WIDTH } from "../consts"
import { propertyIcon } from "../../icons"
import { MinusOutlined } from "@ant-design/icons"
import { useCurrentNode } from "@rxdrag/react-core"

const maxWidth = 1000
const minWidth = 300

const PanelShell = styled(ResizableColumn)`
  position: absolute;
  top: ${DEFAULT_MARGIN}px;
  right: ${DEFAULT_MARGIN}px;
  height: calc(100% - ${DEFAULT_MARGIN * 2}px);
  border-radius: 8px;
  background-color: ${props => props.theme.token?.colorBgBase};
  box-shadow: ${floatShadow};
`

const Container = styled.div`
  flex:1;
  height: 0;
  display: flex;
  flex-flow: column;
  transition: opacity 0.3s;
  min-width: ${minWidth}px;
  min-height: calc(100% - ${DEFAULT_MARGIN * 2}px);
  transition: opacity 0.3s;
  .collapsed{
    opacity: 0;
  }
`

export const CloseButton = styled(Button).attrs({ icon: <MinusOutlined />, size: "small", type: "text" })`
  position: absolute;
  top:8px;
  right:8px;
`

export const PropertyPanel = memo(() => {
  const [collapsed, setCollapsed] = useState(false)
  const [propertyWidth, setPropertyWidth] = usePropertyWidthState()
  const [oldeWidth, setOldWidth] = useState(propertyWidth)
  const currentNode = useCurrentNode()

  useEffect(() => {
    if (!currentNode) {
      setCollapsed(true)
      setPropertyWidth(MINI_WIDGET_WIDTH)
    } else {
      setCollapsed(false)
      setPropertyWidth(oldeWidth)
    }
  }, [currentNode, oldeWidth, setPropertyWidth])

  const handleCollapse = useCallback(() => {
    setCollapsed(true)
    setOldWidth(propertyWidth)
    setPropertyWidth(MINI_WIDGET_WIDTH)
  }, [propertyWidth, setPropertyWidth])

  const handleOpen = useCallback(() => {
    setCollapsed(false)
    setPropertyWidth(oldeWidth)
  }, [oldeWidth, setPropertyWidth])

  return (
    <PanelShell
      right
      maxWidth={maxWidth}
      minWidth={minWidth}
      width={propertyWidth}
      onWidthChange={setPropertyWidth}
      className={collapsed ? "collapsed" : undefined}
      style={{
        height: collapsed ? 32 : undefined,
        width: collapsed ? 32 : undefined,
        minWidth: collapsed ? 32 : undefined,
      }}
    >
      {
        collapsed
          ? <Button
            type="text"

            icon={propertyIcon}
            onClick={handleOpen}
          />
          : <Container className={collapsed ? "collapsed" : undefined}>
            <SettingsForm />
            <CloseButton onClick={handleCollapse} />
          </Container>
      }
    </PanelShell>
  )
})