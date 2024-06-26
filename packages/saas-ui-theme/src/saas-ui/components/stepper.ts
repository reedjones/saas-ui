import { createMultiStyleConfigHelpers, cssVar } from '@chakra-ui/styled-system'
import { transparentize } from '@chakra-ui/theme-tools'

const $size = cssVar('stepper-indicator-size')
const $accentColor = cssVar('stepper-accent-color')
const $verticalSeperatorOffset = cssVar('stepper-vertical-seperator-offset')

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers([
    // saas ui parts
    'container',
    'item',
    'content',
    // default parts
    'stepper',
    'step',
    'title',
    'description',
    'indicator',
    'separator',
    'icon',
    'number',
  ])

const baseStyle = definePartsStyle(({ colorScheme: c }) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
  },
  item: {
    w: 'full',
  },
  content: {
    ['&[data-orientation=vertical]']: {
      mt: 2,
      ms: $verticalSeperatorOffset.reference,
      borderLeftWidth: '1px',
      ps: 6,
    },
  },
  stepper: {
    gap: '2',
    [$verticalSeperatorOffset.variable]: `10px`,
    [$accentColor.variable]: `colors.${c}.500`,
    _dark: {
      [$accentColor.variable]: `colors.${c}.500`,
    },
  },
  separator: {
    transitionProperty: 'common',
    transitionDuration: 'normal',
    ['&[data-orientation=horizontal]']: {
      height: '1px',
    },
    ['&[data-orientation=vertical]']: {
      width: '1px',
    },
    ['.sui-steps__item .chakra-step &[data-orientation=vertical]']: {
      display: 'none',
    },
    ['.sui-steps__item &[data-orientation=vertical]']: {
      position: 'static',
      minH: 4,
      height: 'auto',
      ms: $verticalSeperatorOffset.reference,
    },
  },
  step: {
    ['&[data-orientation=vertical]']: {
      alignItems: 'center',
    },
  },
}))

const variantOutline = definePartsStyle((props) => ({}))

const variantSolid = definePartsStyle((props) => ({
  indicator: {
    '&[data-status=active]': {
      borderWidth: '0',
      bg: $accentColor.reference,
      color: 'chakra-inverse-text',
    },
    '&[data-status=complete]': {
      bg: $accentColor.reference,
      color: 'chakra-inverse-text',
    },
    '&[data-status=incomplete]': {
      borderWidth: '0',
      bg: 'blackAlpha.200',
      _dark: {
        bg: 'whiteAlpha.200',
      },
    },
  },
}))

const variantSubtle = definePartsStyle((props) => {
  const { theme, colorScheme: c } = props
  return {
    stepper: {
      [$accentColor.variable]: `colors.${c}.100`,
    },
    indicator: {
      '&[data-status=active]': {
        borderWidth: '0',
        bg: $accentColor.reference,
        color: `${c}.500`,
        _dark: {
          bg: transparentize(`${c}.200`, 0.16)(theme),
        },
      },
      '&[data-status=complete]': {
        bg: $accentColor.reference,
        color: `${c}.500`,
        _dark: {
          bg: transparentize(`${c}.200`, 0.24)(theme),
          color: `${c}.200`,
        },
      },
      '&[data-status=incomplete]': {
        borderWidth: '0',
        bg: 'blackAlpha.200',
        color: 'blackAlpha.700',
        _dark: {
          bg: 'whiteAlpha.200',
          color: 'whiteAlpha.600',
        },
      },
    },
  }
})

export const stepperTheme = defineMultiStyleConfig({
  defaultProps: {
    variant: 'outline',
    colorScheme: 'primary',
    size: 'md',
  },
  baseStyle,
  variants: {
    outline: variantOutline,
    solid: variantSolid,
    subtle: variantSubtle,
  },
  sizes: {
    xs: definePartsStyle({
      stepper: {
        [$size.variable]: 'sizes.4',
        [$verticalSeperatorOffset.variable]: `7px`,
      },
    }),
    sm: definePartsStyle({
      stepper: {
        [$size.variable]: 'sizes.6',
        [$verticalSeperatorOffset.variable]: `11px`,
      },
    }),
    md: definePartsStyle({
      stepper: {
        [$size.variable]: 'sizes.7',
        [$verticalSeperatorOffset.variable]: `14px`,
      },
    }),
    lg: definePartsStyle({
      stepper: {
        [$size.variable]: 'sizes.8',
        [$verticalSeperatorOffset.variable]: `16px`,
      },
    }),
  },
})
