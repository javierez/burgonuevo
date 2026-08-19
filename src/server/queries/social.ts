

export type SocialLink = {
  platform: "facebook" | "twitter" | "instagram" | "linkedin" | "youtube";
  url: string;
};

export const getSocialLinks = (_accountIdArg?: bigint): SocialLink[] => {
  return [{
  "platform": "instagram",
  "url": "https://www.instagram.com/inmobiliariaburgonuevo?igsh=MWxnczR3NDR3ZzQ3cw=="
}];
}