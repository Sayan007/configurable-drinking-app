export interface SettingsModel {
  api: string,
  theme: Theme,
  siteSettings: SiteSettings
}
interface Theme {
  primaryColor: string,
  secondaryColor: string,
  thirdColor: string,
  titleColor: string
}
interface SiteSettings {
  logoUrl: string,
  logoWidth: string,
  title: string,
  dateFormat: string,
  currency: string,
  companyName: string,
  copyrightYear: string,
  copyrightText: string,
  fontFamily: string;
  copyrightTextColor: string;
  search: boolean;
  typeOfDetailsPage: string;
}