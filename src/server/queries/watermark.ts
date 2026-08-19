

export interface WatermarkConfig {
  enabled: boolean;
  position: string;
  sizePercentage: number;
  opacity: number;
  logoUrl: string;
}

export const getWatermarkConfig = (_accountIdArg?: bigint): WatermarkConfig => {
  return {
  "enabled": true,
  "position": "center",
  "sizePercentage": 40,
  "opacity": 0.4,
  "logoUrl": "https://vesta-crm-prod-eu-e966e353.s3.eu-west-1.amazonaws.com/accounts/111/branding/logo_transparent_1779801082907_0S9XTm.png"
};
}