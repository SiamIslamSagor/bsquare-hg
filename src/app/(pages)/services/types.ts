import { ReactNode } from "react";
import { JSX } from "react/jsx-runtime";

export interface ServicePlanIncludes {
  hosting: boolean;
  domainSetup: boolean;
  seoSetup: boolean;
  contactForms: boolean;
  speedOptimization: boolean;
  sslSetup: boolean;
  adminPanel: boolean;
  revisions: string;
  support: string | boolean;
  deliveryTime: string;
}

export interface ServicePlan {
  name: string;
  price: string;
  description: string;
  popular?: boolean;
  features: string[];
  includes?: ServicePlanIncludes;
}

export interface Service {
  title: string;
  description: string;
  icon: ReactNode;
  plans: ServicePlan[];
}

export type ServiceDataItem = {
  title: string;
  description: string;
  icon: JSX.Element;
  plans: ServicePlan[];
};

export interface ServiceData {
  [key: string]: Service;
}
