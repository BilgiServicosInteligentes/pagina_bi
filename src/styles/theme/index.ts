import brand from '../tokens/brand-tokens'
import global from '../tokens/global-tokens'

export const theme = {
  background: {
    blur: {
      level: {
        one: global.background_blur_level_one,
        two: global.background_blur_level_two,
        three: global.background_blur_level_three,
        four: global.background_blur_level_four
      }
    }
  },
  border: {
    radius: {
      none: global.border_radius_none,
      sm: global.border_radius_sm,
      md: global.border_radius_md,
      lg: global.border_radius_lg,
      pill: global.border_radius_pill,
      circular: global.border_radius_circular
    },
    width: {
      none: global.border_width_none,
      hairline: global.border_width_hairline,
      thin: global.border_width_thin,
      thick: global.border_width_thick,
      heavy: global.border_width_heavy
    }
  },
  breakpoints: {
    sm: global.breakpoint_sm,
    md: global.breakpoint_md,
    lg: global.breakpoint_lg
  },
  colors: {
    base: {
      black: brand.base_color_black,
      white: brand.base_color_white
    },
    gray: {
      gray_50: brand.gray_color_50,
      gray_100: brand.gray_color_100,
      gray_200: brand.gray_color_200,
      gray_300: brand.gray_color_300,
      gray_400: brand.gray_color_400,
      gray_500: brand.gray_color_500,
      gray_600: brand.gray_color_600,
      gray_700: brand.gray_color_700,
      gray_800: brand.gray_color_800,
      gray_900: brand.gray_color_900
    },
    primary: {
      primary_25: brand.primary_color_25,
      primary_50: brand.primary_color_50,
      primary_100: brand.primary_color_100,
      primary_200: brand.primary_color_200,
      primary_300: brand.primary_color_300,
      primary_400: brand.primary_color_400,
      primary_500: brand.primary_color_500,
      primary_600: brand.primary_color_600,
      primary_700: brand.primary_color_700,
      primary_800: brand.primary_color_800,
      primary_900: brand.primary_color_900
    },
    error: {
      error_25: brand.error_color_25,
      error_50: brand.error_color_50,
      error_100: brand.error_color_100,
      error_200: brand.error_color_200,
      error_300: brand.error_color_300,
      error_400: brand.error_color_400,
      error_500: brand.error_color_500,
      error_600: brand.error_color_600,
      error_700: brand.error_color_700,
      error_800: brand.error_color_800,
      error_900: brand.error_color_900
    }
  },
  font: {
    family: {
      base: brand.font_family_base
    },
    weight: {
      regular: brand.font_weight_regular,
      medium: brand.font_weight_medium,
      semi_bold: brand.font_weight_semi_bold,
      bold: brand.font_weight_bold
    },
    size: {
      text: {
        xs: brand.font_text_xs,
        sm: brand.font_text_sm,
        md: brand.font_text_md,
        lg: brand.font_text_lg,
        xl: brand.font_text_xl
      },
      display: {
        xs: brand.font_display_xs,
        sm: brand.font_display_sm,
        md: brand.font_display_md,
        lg: brand.font_display_lg,
        xl: brand.font_display_xl,
        xxl: brand.font_display_xxl
      }
    }
  },
  gradient: {
    distance: {
      default: global.gradient_distance_default
    }
  },
  line: {
    height: {
      default: global.line_height_default,
      text: {
        xs: global.line_height_text_xs,
        sm: global.line_height_text_sm,
        md: global.line_height_text_md,
        lg: global.line_height_text_lg,
        xl: global.line_height_text_xl
      },
      display: {
        xs: global.line_height_display_xs,
        sm: global.line_height_display_sm,
        md: global.line_height_display_md,
        lg: global.line_height_display_lg,
        xl: global.line_height_display_xl,
        xxl: global.line_height_display_xxl
      }
    }
  },
  opacity: {
    level: {
      semiopaque: global.opacity_level_semiopaque,
      intense: global.opacity_level_intense,
      medium: global.opacity_level_medium,
      light: global.opacity_level_light,
      semitransparent: global.opacity_level_semitransparent
    }
  },
  shadow: {
    level: {
      xs: global.shadow_level_xs,
      sm: global.shadow_level_sm,
      md: global.shadow_level_md,
      lg: global.shadow_level_lg,
      xl: global.shadow_level_xl,
      xl2: global.shadow_level_xl2,
      xl3: global.shadow_level_xl3
    }
  },
  spacing: {
    spacing_1: global.spacing_1,
    spacing_2: global.spacing_2,
    spacing_3: global.spacing_3,
    spacing_4: global.spacing_4,
    spacing_5: global.spacing_5,
    spacing_6: global.spacing_6,
    spacing_8: global.spacing_8,
    spacing_10: global.spacing_10,
    spacing_12: global.spacing_12,
    spacing_16: global.spacing_16,
    spacing_20: global.spacing_20,
    spacing_24: global.spacing_24,
    spacing_32: global.spacing_32,
    spacing_40: global.spacing_40,
    spacing_48: global.spacing_48,
    spacing_56: global.spacing_56,
    spacing_64: global.spacing_64
  }
}
