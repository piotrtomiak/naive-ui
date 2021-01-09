import { c, cB, cE, cM, cNotM } from '../../../../_utils/cssr'

export default cB('base-select-menu', `
  outline: none;
  margin-top: 4px;
  margin-bottom: 4px;
  z-index: 0;
  position: relative;
  border-radius: var(--border-radius);
  transition:
    background-color .3s var(--bezier),
    box-shadow .3s var(--bezier);
  overflow: hidden;
  background-color: var(--color);
  box-shadow: var(--box-shadow);
`, [
  cB('scrollbar', `
    max-height: calc(var(--option-height) * 7.6);
  `),
  cB('virtual-list', `
    max-height: calc(var(--option-height) * 7.6);
  `),
  cB('base-select-option', `
    height: var(--option-height);
    line-height: var(--option-height);
    font-size: var(--option-font-size);
  `),
  cB('base-select-group-header', `
    height: var(--option-height);
    line-height: var(--option-height);
    font-size: .93em;
  `),
  cB('base-select-menu-option-wrapper', `
    position: relative;
    width: 100%;
  `),
  cE('action', `
    padding: 8px 14px;
    font-size: var(--option-font-size);
    transition: 
      color .3s var(--bezier);
      border-color .3s var(--bezier);
    borderTop: 1px solid var(--action-divider-color);
    color: var(--action-text-color);
  `),
  cB('base-select-group-header', `
    position: relative;
    cursor: default;
    padding: 0 14px;
    color: var(--group-header-text-color);
  `),
  cB('base-select-option', `
    cursor: pointer;
    position: relative;
    padding: 0 14px;
    white-space: nowrap;
    transition:
      background-color .3s var(--bezier),
      color .3s var(--bezier),
      opacity .3s var(--bezier);
    text-overflow: ellipsis;
    overflow: hidden;
    box-sizing: border-box;
    color: var(--option-text-color);
    opacity: 1;
  `, [
    c('&:active', {
      color: 'var(--option-text-color-pressed)'
    }),
    cM('grouped', {
      padding: '0 21px'
    }),
    cM('selected', {
      color: 'var(--option-text-color-active)'
    }),
    cM('disabled', {
      cursor: 'not-allowed'
    }, [
      cNotM('selected', {
        color: 'var(--option-text-color-disabled)'
      }),
      cM('selected', {
        opacity: 'var(--option-opacity-disabled)'
      })
    ]),
    cM('pending', {
      backgroundColor: 'var(--option-color-pending)'
    })
  ]),
  cM('multiple', [
    cB('base-select-option', `
      position: relative;
      padding-right: 28px;
    `, [
      cM('selected', [
        c('&::after', `
          opacity: 1;
          transform: rotate(45deg) scale(1);
        `)
      ]),
      // TODO: use SVG icon
      c('&::after', `
        content: '';
        height: 8px;
        width: 4px;
        position: absolute;
        right: 14px;
        transform: rotate(45deg) scale(.5);
        top: calc(50% - 4px);
        opacity: 0;
        transition:
          transform .3s var(--bezier),
          opacity .3s var(--bezier);
        border-right: 1px solid var(--option-check-color);
        border-bottom: 1px solid var(--option-check-color);
      `)
    ])
  ])
])