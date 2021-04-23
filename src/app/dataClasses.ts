export interface AdvisorData {
  region: string;
  typeMajor: string;
  typeMinor: string;
  os: string;
  interruptionFrequency?: string;
  onDemandSavings: number;
  cores: number;
  ramGB: number;
}

export interface CurrentSpotData {
  region: string;
  typeMajor: string;
  typeMinor: string;
  os: string;
  onDemandPrice: number;
  cores: number;
  ramGB: number;
}

export interface EBSPrice {
  region: string;
  price: number;
  type: string;
}

export interface EC2Price {
  region: string;
  typeMajor: string;
  typeMinor: string;
  os: string;
  ebsOnly: boolean;
  storage?: string;
  memory: number;
  network: string;
  cpu: number;
  family: string;
  onDemandPrice: number;
}

export interface SelectObject {
  value: string;
  viewValue: string;
}

export interface Filter {
  selectedRegion?: string;
  selectedOs: string;
  memory: string;
  vCPUs: string;
  type?: string;
  throughput: string;
  iops: string;
  size: string;
  network?: number;
  behavior?: string;
  frequency?: string;
  storageType?: string;
  burstable?: boolean;
  name?: string;
}
