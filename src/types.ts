import { ActionConfig, LovelaceCard, LovelaceCardConfig, LovelaceCardEditor } from 'custom-card-helpers';

declare global {
  interface HTMLElementTagNameMap {
    'big-slider-card-editor': LovelaceCardEditor;
    'hui-error-card': LovelaceCard;
  }
}

export interface MousePos {
  x: number;
  y: number;
}
export interface BigSliderCardConfig extends LovelaceCardConfig {
  type: string;
  name?: string;
  entity?: string;
  attribute: string;
  transition?: number;
  height?: number;
  color?: string;
  background_color?: string;
  background_color_on?: string;
  text_font_weight?: string;
  text_color?: string;
  text_color_on?: string;
  secondary_text_color?: string;
  secondary_text_color_on?: string;
  icon_color?: string;
  icon_color_off?: string;
  border_color?: string;
  border_radius?: string;
  border_style?: string;
  border_width?: string;
  colorize?: boolean;
  icon?: string;
  show_percentage?: boolean;
  bold_text?: boolean;
  min: number;
  max: number;
  min_slide_time: number;
  hold_time: number;
  settle_time: number;
  tap_action: ActionConfig;
  hold_action?: ActionConfig;
}