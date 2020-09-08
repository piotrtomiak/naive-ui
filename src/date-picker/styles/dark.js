import create from '../../styles/_utils/create-component-base'
import { changeColor } from '../../_utils/color/index'

export default create({
  theme: 'dark',
  name: 'DatePicker',
  getDerivedVariables ({ base, derived }) {
    return {
      itemTextColor: derived.secondaryTextOverlayColor,
      itemTextColorMatched: derived.popoverBackgroundColor,
      itemSupColor: derived.primaryColor,
      itemSupColorMatch: derived.popoverBackgroundColor,
      itemColorHover: changeColor(derived.primaryColor, { alpha: 0.5 }),
      itemColorActive: derived.primaryColor,
      itemBorderRadius: base.smallBorderRadius,
      panelColor: derived.popoverBackgroundColor,
      panelTextColor: derived.secondaryTextOverlayColor,
      panelIconColor: derived.iconOverlayColor,
      panelHeaderTextColor: derived.primaryTextOverlayColor,
      panelDividerColor: derived.dividerOverlayColor,
      panelBorderRadius: base.borderRadius,
      panelBoxShadow: derived.popoverBoxShadow,
      pickerTextDecorationColor: derived.secondaryTextOverlayColor,
      panelHeaderFontWeight: base.strongFontWeight
    }
  }
})