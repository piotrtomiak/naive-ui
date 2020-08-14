import { cTB, c, cB, cE, cM } from '../../../_utils/cssr'

function createResultStatus (status, colorStatus) {
  return cM(`${status}-status`, [
    cB('result-icon', [
      cB('icon', {
        raw: `
          fill: ${colorStatus[status]};
          stroke: ${colorStatus[status]};
        `
      })
    ])
  ])
}

export default c([
  ({ props }) => {
    const {
      headerTextColor,
      descriptionTextColor,
      iconColorError,
      iconColorSuccess,
      iconColorInfo,
      iconColorWarning,
      lineHeight,
      strongFontWeight
    } = props.$local
    const {
      easeInOutCubicBezier
    } = props.$base
    const colorStatus = {
      success: iconColorSuccess,
      warning: iconColorWarning,
      info: iconColorInfo,
      error: iconColorError
    }
    return cTB('result', {
      raw: `
        color: ${descriptionTextColor};
        line-height: ${lineHeight};
        font-size: 14px;
        transition:
          color .3s ${easeInOutCubicBezier};
      `
    }, [
      ['success', 'info', 'warning', 'error'].map(item => createResultStatus(item, colorStatus)),
      cB('result-icon', {
        raw: `
          display: flex;
          justify-content: center;
        `
      }),
      cB('result-content', {
        raw: `
          margin-top: 24px;
        `
      }),
      cB('result-footer', {
        raw: `
          margin-top: 24px;
          text-align: center;
        `
      }),
      cB('result-header', [
        cE('title', {
          raw: `
            margin-top: 16px;
            font-weight: ${strongFontWeight};
            transition: color .3s ${easeInOutCubicBezier};
            text-align: center;
            color: ${headerTextColor};
          `
        }),
        cE('description', {
          raw: `
            margin-top: 4px;
            text-align: center;
          `
        })
      ])
    ])
  }
])
